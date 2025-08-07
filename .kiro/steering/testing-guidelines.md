---
inclusion: fileMatch
fileMatchPattern: "*.test.ts"
---

# Guías de Testing para Ordenadores de Umbral

## Estructura de Pruebas

### Organización de Archivos
- Colocar pruebas junto al código que testean
- Usar sufijo `.test.ts` para pruebas unitarias
- Usar sufijo `.integration.test.ts` para pruebas de integración

```
modules/game/
├── domain/
│   ├── entities/
│   │   ├── Game.ts
│   │   └── Game.test.ts
│   └── services/
│       ├── GameService.ts
│       └── GameService.test.ts
```

### Naming de Pruebas
- Usar describe para agrupar pruebas relacionadas
- Usar nombres descriptivos que expliquen el comportamiento esperado

```typescript
// ✅ Correcto
describe('Game Entity', () => {
  describe('when starting a new game', () => {
    it('should initialize with default player stats', () => {
      // Test implementation
    })
    
    it('should set initial scene to intro', () => {
      // Test implementation
    })
  })
  
  describe('when game is already started', () => {
    it('should throw GameAlreadyStartedError', () => {
      // Test implementation
    })
  })
})
```

## Patrones de Testing

### AAA Pattern (Arrange, Act, Assert)
- **Arrange**: Configurar datos y mocks necesarios
- **Act**: Ejecutar la acción que se está probando
- **Assert**: Verificar el resultado esperado

```typescript
// ✅ Correcto
it('should update player stats when choice is executed', () => {
  // Arrange
  const player = new Player(PlayerId.create(), PlayerStats.initial())
  const choice = new Choice(ChoiceId.create(), 'Test choice', { energy: 10 })
  
  // Act
  player.executeChoice(choice)
  
  // Assert
  expect(player.getStats().energy).toBe(60) // 50 + 10
})
```

### Mocking
- Usar mocks para dependencias externas
- Crear factory functions para objetos de prueba
- Mantener mocks simples y enfocados

```typescript
// ✅ Correcto
function createMockPlayerRepository(): jest.Mocked<PlayerRepository> {
  return {
    findById: jest.fn(),
    save: jest.fn(),
    delete: jest.fn()
  }
}

describe('StartGameUseCase', () => {
  let useCase: StartGameUseCase
  let mockPlayerRepository: jest.Mocked<PlayerRepository>
  
  beforeEach(() => {
    mockPlayerRepository = createMockPlayerRepository()
    useCase = new StartGameUseCase(mockPlayerRepository)
  })
})
```

## Testing por Capas

### Dominio (Entidades y Value Objects)
- Testear lógica de negocio sin dependencias externas
- Verificar validaciones y reglas de dominio
- Testear casos edge y errores

```typescript
// ✅ Correcto
describe('PlayerStats', () => {
  it('should clamp energy between 0 and 100', () => {
    const stats = new PlayerStats(50, 50, 0, 0)
    
    stats.applyEffects({ energy: 60 }) // Would be 110
    expect(stats.energy).toBe(100)
    
    stats.applyEffects({ energy: -120 }) // Would be -20
    expect(stats.energy).toBe(0)
  })
})
```

### Aplicación (Casos de Uso)
- Testear orquestación de servicios
- Verificar que se llamen los métodos correctos
- Testear manejo de errores

```typescript
// ✅ Correcto
describe('LoadSceneUseCase', () => {
  it('should load scene and update game state', async () => {
    // Arrange
    const mockScene = createMockScene()
    mockSceneRepository.findById.mockResolvedValue(mockScene)
    
    // Act
    const result = await useCase.execute({ sceneId: 'test-scene' })
    
    // Assert
    expect(mockSceneRepository.findById).toHaveBeenCalledWith('test-scene')
    expect(result.currentScene).toBe(mockScene)
  })
})
```

### Presentación (Componentes React)
- Testear interacciones del usuario
- Verificar renderizado correcto
- Testear accesibilidad

```typescript
// ✅ Correcto
describe('GameChoice Component', () => {
  it('should call onSelect when clicked', async () => {
    const mockOnSelect = jest.fn()
    const choice = createMockChoice()
    
    render(<GameChoice choice={choice} onSelect={mockOnSelect} />)
    
    const button = screen.getByRole('button')
    await user.click(button)
    
    expect(mockOnSelect).toHaveBeenCalledWith(choice.id)
  })
  
  it('should be accessible via keyboard', async () => {
    render(<GameChoice choice={createMockChoice()} onSelect={jest.fn()} />)
    
    const button = screen.getByRole('button')
    button.focus()
    await user.keyboard('{Enter}')
    
    expect(mockOnSelect).toHaveBeenCalled()
  })
})
```

## Cobertura de Código

### Objetivos
- **Dominio**: 95%+ cobertura (lógica crítica de negocio)
- **Aplicación**: 90%+ cobertura (casos de uso importantes)
- **Presentación**: 80%+ cobertura (componentes principales)

### Configuración Jest
```javascript
// jest.config.js
module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.tsx'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    },
    './src/modules/*/domain/': {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95
    }
  }
}
```

## Herramientas de Testing

### Jest
- Configurar con TypeScript
- Usar setupFilesAfterEnv para configuración global
- Configurar mocks para módulos externos

### Testing Library
- Usar queries semánticas (getByRole, getByLabelText)
- Testear desde la perspectiva del usuario
- Usar user-event para interacciones realistas

### MSW (Mock Service Worker)
- Para mockear APIs en pruebas de integración
- Mantener mocks realistas y actualizados