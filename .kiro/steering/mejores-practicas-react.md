---
inclusion: fileMatch
fileMatchPattern: "*.tsx"
---

# Mejores Prácticas React para Ordenadores de Umbral

## Componentes

### Estructura de Componentes
- Usar TypeScript estricto para todos los componentes
- Definir interfaces claras para props
- Usar composition sobre inheritance
- Mantener componentes pequeños y enfocados

```typescript
// ✅ Correcto
interface GameChoiceProps {
  choice: Choice
  isSelected: boolean
  onSelect: (choiceId: ChoiceId) => void
}

export function GameChoice({ choice, isSelected, onSelect }: GameChoiceProps) {
  return (
    <button
      onClick={() => onSelect(choice.id)}
      className={`choice ${isSelected ? 'selected' : ''}`}
    >
      {choice.description}
    </button>
  )
}
```

### Hooks Personalizados
- Extraer lógica compleja a hooks personalizados
- Usar prefijo `use` para hooks
- Mantener hooks enfocados en una responsabilidad

```typescript
// ✅ Correcto
export function useGameState() {
  const game = useGameStore(state => state.game)
  const actions = useGameStore(state => state.actions)
  
  return { game, actions }
}
```

## Optimización de Rendimiento

### Memoización
- Usar `React.memo` para componentes que reciben props complejas
- Usar `useMemo` para cálculos costosos
- Usar `useCallback` para funciones que se pasan como props

```typescript
// ✅ Correcto
export const GameScene = React.memo(function GameScene({ scene }: GameSceneProps) {
  const processedText = useMemo(() => 
    processSceneText(scene.text), [scene.text]
  )
  
  const handleChoice = useCallback((choiceId: ChoiceId) => {
    onChoiceSelect(choiceId)
  }, [onChoiceSelect])
  
  return <div>{processedText}</div>
})
```

### Lazy Loading
- Usar `React.lazy` para componentes pesados
- Implementar `Suspense` con fallbacks apropiados

```typescript
// ✅ Correcto
const GameContent = lazy(() => import('./GameContent'))

export function GameContainer() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <GameContent />
    </Suspense>
  )
}
```

## Manejo de Estado

### Zustand
- Crear stores pequeños y enfocados
- Usar immer para actualizaciones inmutables
- Implementar selectors para optimizar re-renders

```typescript
// ✅ Correcto
export const usePlayerStore = create<PlayerStore>()(
  immer((set, get) => ({
    player: null,
    updateStats: (effects: StatEffects) => set((state) => {
      if (state.player) {
        state.player.stats.applyEffects(effects)
      }
    })
  }))
)
```

## Accesibilidad

### ARIA y Semántica
- Usar elementos semánticos HTML apropiados
- Añadir atributos ARIA cuando sea necesario
- Implementar navegación por teclado

```typescript
// ✅ Correcto
export function GameMenu({ items, selectedIndex }: GameMenuProps) {
  return (
    <nav role="menu" aria-label="Menú del juego">
      {items.map((item, index) => (
        <button
          key={item.id}
          role="menuitem"
          aria-selected={selectedIndex === index}
          tabIndex={selectedIndex === index ? 0 : -1}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
```

## Testing

### Testing Library
- Usar queries por rol y texto visible
- Evitar queries por clase CSS o test IDs cuando sea posible
- Testear comportamiento, no implementación

```typescript
// ✅ Correcto
test('should select choice when clicked', async () => {
  const mockOnSelect = jest.fn()
  render(<GameChoice choice={mockChoice} onSelect={mockOnSelect} />)
  
  const button = screen.getByRole('button', { name: /test choice/i })
  await user.click(button)
  
  expect(mockOnSelect).toHaveBeenCalledWith(mockChoice.id)
})
```

## Convenciones de Naming

- **Componentes**: PascalCase (GameContainer, PlayerStats)
- **Hooks**: camelCase con prefijo use (useGameState, usePlayerStats)
- **Props**: camelCase con sufijo Props (GameContainerProps)
- **Eventos**: camelCase con prefijo on (onChoiceSelect, onGameStart)