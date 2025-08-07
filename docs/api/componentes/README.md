# Componentes React

Esta sección documenta todos los componentes React del proyecto, organizados por categorías funcionales.

## Estructura de Componentes

```
components/
├── game/           # Componentes específicos del juego
├── layout/         # Componentes de layout y navegación
├── ui/             # Componentes UI reutilizables
└── theme-provider.tsx
```

## Componentes del Juego

### Componentes Principales

| Componente | Descripción | Props Principales |
|------------|-------------|-------------------|
| [GameContainer](./game/game-container.md) | Contenedor principal que coordina el juego | - |
| [Scene](./game/scene.md) | Renderiza el contenido de una escena | `currentScene` |
| [Choice](./game/choice.md) | Botón de opción interactiva | `choice` |
| [MainMenu](./game/main-menu.md) | Menú principal del juego | `onStart` |

### Componentes de UI del Juego

| Componente | Descripción | Ubicación |
|------------|-------------|-----------|
| [ConsoleUI](./game/ui/console-ui.md) | Interfaz principal de terminal | `components/game/ui/` |
| [LoadingScreen](./game/ui/loading-screen.md) | Pantalla de carga | `components/game/ui/` |
| [GameContent](./game/ui/game-content.md) | Contenedor del contenido del juego | `components/game/ui/` |

### Componentes de Texto

| Componente | Descripción | Props |
|------------|-------------|-------|
| [CodeFragment](./game/text/code-fragment.md) | Texto con formato de código | `text` |
| [Quote](./game/text/quote.md) | Citas con estilo especial | `text`, `type` |
| [RegularText](./game/text/regular-text.md) | Texto normal con efectos | `text` |

### Componentes de Estado

| Componente | Descripción | Props |
|------------|-------------|-------|
| [PlayerStats](./game/status/player-stats.md) | Muestra estadísticas del jugador | `stats` |
| [ProgressBar](./game/status/progress-bar.md) | Barra de progreso | `value`, `max` |
| [StatIndicator](./game/status/stat-indicator.md) | Indicador individual de estadística | `type`, `value` |

### Componentes de Efectos

| Componente | Descripción | Props |
|------------|-------------|-------|
| [EffectItem](./game/effects/effect-item.md) | Muestra un efecto individual | `type`, `value` |
| [TypewriterEffect](./game/effects/typewriter.md) | Efecto de escritura | `text`, `speed` |
| [CRTEffect](./game/effects/crt-effect.md) | Efectos visuales CRT | `intensity` |

## Componentes de Layout

### [Navbar](./layout/navbar.md)
Barra de navegación principal del sitio.

**Props:**
- `currentPath?: string` - Ruta actual para resaltar
- `showBackButton?: boolean` - Mostrar botón de retroceso

## Componentes UI Reutilizables

### Componentes Base

Los componentes UI están basados en Radix UI y siguen el patrón de diseño del sistema.

| Componente | Descripción | Documentación |
|------------|-------------|---------------|
| [Button](./ui/button.md) | Botón base con variantes | Radix UI Button |
| [Card](./ui/card.md) | Contenedor de tarjeta | Radix UI Card |
| [Dialog](./ui/dialog.md) | Modal de diálogo | Radix UI Dialog |
| [Progress](./ui/progress.md) | Barra de progreso | Radix UI Progress |
| [Separator](./ui/separator.md) | Separador visual | Radix UI Separator |

### Componentes Personalizados

| Componente | Descripción | Props Principales |
|------------|-------------|-------------------|
| [FloatingNav](./ui/floating-nav.md) | Navegación flotante | `items`, `className` |
| [NavigationHeader](./ui/navigation-header.md) | Header de navegación | `title`, `showBack` |

## Hooks Personalizados

### [useGameState](./hooks/use-game-state.md)
Hook para acceder al estado del juego.

```typescript
const { 
  currentScene, 
  playerStats, 
  executeChoice 
} = useGameState();
```

### [useKeyboardNavigation](./hooks/use-keyboard-navigation.md)
Hook para navegación por teclado.

```typescript
const { 
  selectedIndex, 
  handleKeyDown 
} = useKeyboardNavigation(items);
```

### [useTypewriter](./hooks/use-typewriter.md)
Hook para efecto de escritura.

```typescript
const { 
  displayText, 
  isComplete 
} = useTypewriter(text, speed);
```

## Patrones de Componentes

### Composición de Componentes

```typescript
// Patrón de composición usado en el juego
<GameContainer>
  <ConsoleUI>
    <Scene currentScene={scene}>
      <Choice choice={choice1} />
      <Choice choice={choice2} />
    </Scene>
  </ConsoleUI>
</GameContainer>
```

### Render Props

```typescript
// Patrón render props para componentes flexibles
<TypewriterEffect text="Hola mundo">
  {({ displayText, isComplete }) => (
    <div className={isComplete ? 'complete' : 'typing'}>
      {displayText}
    </div>
  )}
</TypewriterEffect>
```

### Higher-Order Components

```typescript
// HOC para añadir efectos CRT a cualquier componente
const withCRTEffect = (Component) => {
  return (props) => (
    <div className="crt-container">
      <Component {...props} />
      <CRTEffect />
    </div>
  );
};
```

## Convenciones de Componentes

### Naming
- **Componentes**: PascalCase (`GameContainer`, `MainMenu`)
- **Props**: camelCase (`currentScene`, `onStart`)
- **Archivos**: kebab-case (`game-container.tsx`, `main-menu.tsx`)

### Estructura de Archivos
```typescript
// Estructura estándar de un componente
export interface ComponentProps {
  // Props interface
}

export default function Component({ prop1, prop2 }: ComponentProps) {
  // Component implementation
}

// Exportaciones adicionales si es necesario
export { type ComponentProps };
```

### Props y TypeScript
- Todas las props deben estar tipadas
- Props opcionales marcadas con `?`
- Props de eventos prefijadas con `on`
- Props de render functions sufijadas con `Render`

### Accesibilidad
- Todos los componentes interactivos deben ser accesibles por teclado
- Usar atributos ARIA apropiados
- Soporte para lectores de pantalla
- Contraste de colores WCAG 2.1 AA

## Testing de Componentes

### Estrategia de Testing
- **Unit Tests**: Testing Library para componentes individuales
- **Integration Tests**: Testing de interacciones entre componentes
- **Visual Tests**: Storybook para documentación visual
- **E2E Tests**: Playwright para flujos completos

### Ejemplo de Test
```typescript
describe('GameContainer', () => {
  it('should render game content when initialized', () => {
    render(<GameContainer />);
    
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText(/terminal iniciada/i)).toBeInTheDocument();
  });

  it('should handle keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<GameContainer />);
    
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('button', { name: /opción 1/i })).toHaveFocus();
  });
});
```