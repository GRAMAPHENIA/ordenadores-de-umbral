# GameStore

El `GameStore` es el store principal del juego que gestiona todo el estado global de la aplicación usando Zustand. Centraliza la gestión del estado del jugador, las escenas, la navegación y la configuración del juego.

## Ubicación
```
lib/store.ts
```

## Estructura del Estado

### GameState
```typescript
interface GameState {
  // Estado del jugador
  player: Player
  
  // Estado de la escena actual
  currentScene: Scene | null
  sceneHistory: string[]
  
  // Estado de navegación
  isLoading: boolean
  error: string | null
  
  // Configuración del juego
  config: GameConfig
  
  // Estado de la UI
  isTerminalFocused: boolean
  showStats: boolean
}
```

## Acciones del Store

### Gestión del Jugador

#### `updatePlayerStats(effects: StatEffects): void`
Actualiza las estadísticas del jugador aplicando los efectos especificados.

**Parámetros:**
- `effects`: Objeto con los cambios a aplicar a las estadísticas

**Ejemplo:**
```typescript
const { updatePlayerStats } = useGameStore()

updatePlayerStats({
  energy: -10,
  mood: 5,
  time: -1
})
```

#### `addAchievement(achievementId: string): void`
Añade un logro al jugador si no lo tiene ya.

**Parámetros:**
- `achievementId`: ID único del logro

#### `resetPlayer(): void`
Reinicia el estado del jugador a los valores iniciales.

### Gestión de Escenas

#### `loadScene(sceneId: string): Promise<void>`
Carga una nueva escena y la establece como escena actual.

**Parámetros:**
- `sceneId`: ID de la escena a cargar

**Efectos:**
- Actualiza `currentScene`
- Añade la escena al historial
- Maneja estados de carga y error

#### `selectOption(optionId: string): Promise<void>`
Procesa la selección de una opción en la escena actual.

**Parámetros:**
- `optionId`: ID de la opción seleccionada

**Efectos:**
- Aplica efectos de la opción al jugador
- Navega a la siguiente escena si corresponde
- Actualiza el historial

#### `goBack(): void`
Navega a la escena anterior en el historial.

### Gestión de Estado Global

#### `setLoading(loading: boolean): void`
Establece el estado de carga global.

#### `setError(error: string | null): void`
Establece un mensaje de error global.

#### `clearError(): void`
Limpia el error actual.

#### `toggleStats(): void`
Alterna la visibilidad del panel de estadísticas.

#### `setTerminalFocus(focused: boolean): void`
Establece si el terminal tiene el foco.

## Selectores

### `usePlayer()`
Hook que retorna solo el estado del jugador.

```typescript
const player = useGameStore(state => state.player)
```

### `useCurrentScene()`
Hook que retorna la escena actual.

```typescript
const currentScene = useGameStore(state => state.currentScene)
```

### `useGameConfig()`
Hook que retorna la configuración del juego.

```typescript
const config = useGameStore(state => state.config)
```

## Persistencia

El store utiliza el middleware `persist` de Zustand para mantener el estado entre sesiones:

```typescript
const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      // Estado inicial y acciones
    }),
    {
      name: 'ordenadores-umbral-game',
      partialize: (state) => ({
        player: state.player,
        sceneHistory: state.sceneHistory,
        config: state.config
      })
    }
  )
)
```

### Datos Persistidos
- Estado completo del jugador
- Historial de escenas visitadas
- Configuración personalizada del juego

### Datos No Persistidos
- Escena actual (se recarga al iniciar)
- Estados de carga y error
- Estado de la UI (foco, visibilidad de stats)

## Inicialización

### `initializeGame(): Promise<void>`
Inicializa el juego cargando la configuración y estableciendo el estado inicial.

**Proceso:**
1. Carga la configuración del juego
2. Inicializa el jugador si es necesario
3. Carga la escena inicial
4. Establece el estado de la UI

## Middleware y Extensiones

### DevTools
En desarrollo, el store incluye integración con Redux DevTools:

```typescript
devtools(
  (set, get) => storeImplementation,
  { name: 'GameStore' }
)
```

### Subscriptions
El store permite suscribirse a cambios específicos:

```typescript
// Suscribirse a cambios en las estadísticas del jugador
useGameStore.subscribe(
  (state) => state.player.stats,
  (stats) => {
    console.log('Stats updated:', stats)
  }
)
```

## Patrones de Uso

### En Componentes React
```typescript
function GameComponent() {
  const { 
    currentScene, 
    player, 
    selectOption, 
    isLoading 
  } = useGameStore()
  
  if (isLoading) return <LoadingSpinner />
  
  return (
    <div>
      <PlayerStats stats={player.stats} />
      <SceneDisplay 
        scene={currentScene} 
        onOptionSelect={selectOption} 
      />
    </div>
  )
}
```

### Acciones Asíncronas
```typescript
const handleOptionSelect = async (optionId: string) => {
  try {
    await selectOption(optionId)
  } catch (error) {
    console.error('Error selecting option:', error)
  }
}
```

## Consideraciones de Rendimiento

- **Selectores específicos**: Usar selectores granulares para evitar re-renders innecesarios
- **Acciones inmutables**: Todas las actualizaciones de estado son inmutables
- **Lazy loading**: Las escenas se cargan bajo demanda
- **Memoización**: Los componentes que consumen el store deben usar `memo` cuando sea apropiado

## Testing

### Mocking del Store
```typescript
import { create } from 'zustand'

const createMockStore = (initialState = {}) => 
  create(() => ({
    ...defaultGameState,
    ...initialState
  }))
```

### Testing de Acciones
```typescript
test('updatePlayerStats should update player statistics', () => {
  const store = createMockStore()
  
  store.getState().updatePlayerStats({ energy: -10 })
  
  expect(store.getState().player.stats.energy).toBe(90)
})
```