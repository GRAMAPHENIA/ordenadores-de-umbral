# Documento de Diseño - Refactorización Arquitectura Modular

## Visión General

Este documento presenta el diseño de una arquitectura modular y escalable para "Ordenadores de Umbral", transformando la estructura monolítica actual en un sistema basado en principios de arquitectura limpia, separación de responsabilidades y modularización por dominios.

## Arquitectura

### Arquitectura por Capas

La nueva arquitectura seguirá el patrón de arquitectura hexagonal (puertos y adaptadores) con las siguientes capas:

```
┌─────────────────────────────────────────────────────────────┐
│                    CAPA DE PRESENTACIÓN                     │
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │   Componentes   │  │     Páginas     │  │    Hooks     │ │
│  │       UI        │  │    Next.js      │  │   React      │ │
│  └─────────────────┘  └─────────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────────┘
                                │
┌─────────────────────────────────────────────────────────────┐
│                    CAPA DE APLICACIÓN                       │
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │   Casos de Uso  │  │   Servicios     │  │ Controladores│ │
│  │   (Use Cases)   │  │  Aplicación     │  │              │ │
│  └─────────────────┘  └─────────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────────┘
                                │
┌─────────────────────────────────────────────────────────────┐
│                     CAPA DE DOMINIO                         │
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │   Entidades     │  │   Repositorios  │  │   Servicios  │ │
│  │   (Entities)    │  │  (Interfaces)   │  │   Dominio    │ │
│  └─────────────────┘  └─────────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────────┘
                                │
┌─────────────────────────────────────────────────────────────┐
│                  CAPA DE INFRAESTRUCTURA                    │
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │   Repositorios  │  │    Servicios    │  │  Adaptadores │ │
│  │  Implementación │  │   Externos      │  │   Externos   │ │
│  └─────────────────┘  └─────────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Estructura de Directorios Propuesta

```
src/
├── app/                          # Next.js App Router (Capa Presentación)
│   ├── (game)/                   # Grupo de rutas del juego
│   │   ├── ordenador-de-umbral/
│   │   ├── niveles/
│   │   └── logros/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── modules/                      # Módulos de dominio
│   ├── game/                     # Módulo del juego
│   │   ├── domain/               # Capa de dominio
│   │   │   ├── entities/
│   │   │   ├── repositories/
│   │   │   └── services/
│   │   ├── application/          # Capa de aplicación
│   │   │   ├── use-cases/
│   │   │   └── services/
│   │   ├── infrastructure/       # Capa de infraestructura
│   │   │   ├── repositories/
│   │   │   └── adapters/
│   │   └── presentation/         # Capa de presentación
│   │       ├── components/
│   │       ├── hooks/
│   │       └── stores/
│   ├── player/                   # Módulo del jugador
│   ├── navigation/               # Módulo de navegación
│   ├── scenes/                   # Módulo de escenas
│   └── shared/                   # Módulo compartido
├── shared/                       # Código compartido entre módulos
│   ├── config/                   # Configuración centralizada
│   ├── types/                    # Tipos compartidos
│   ├── utils/                    # Utilidades
│   ├── constants/                # Constantes
│   └── errors/                   # Manejo de errores
└── tests/                        # Pruebas organizadas por módulo
    ├── game/
    ├── player/
    └── shared/
```

## Componentes y Interfaces

### Módulo de Juego (Game)

#### Entidades de Dominio

```typescript
// modules/game/domain/entities/Game.ts
export class Game {
  constructor(
    private readonly id: GameId,
    private readonly state: GameState,
    private readonly config: GameConfig
  ) {}

  public start(): void
  public pause(): void
  public resume(): void
  public reset(): void
  public getCurrentState(): GameState
}

// modules/game/domain/entities/GameState.ts
export class GameState {
  constructor(
    private readonly currentScene: SceneId,
    private readonly history: SceneId[],
    private readonly isInitialized: boolean
  ) {}
}
```

#### Repositorios (Interfaces)

```typescript
// modules/game/domain/repositories/GameRepository.ts
export interface GameRepository {
  save(game: Game): Promise<void>
  findById(id: GameId): Promise<Game | null>
  delete(id: GameId): Promise<void>
}

// modules/game/domain/repositories/SceneRepository.ts
export interface SceneRepository {
  findById(id: SceneId): Promise<Scene | null>
  findAll(): Promise<Scene[]>
  findByCategory(category: string): Promise<Scene[]>
}
```

#### Casos de Uso

```typescript
// modules/game/application/use-cases/StartGameUseCase.ts
export class StartGameUseCase {
  constructor(
    private readonly gameRepository: GameRepository,
    private readonly sceneRepository: SceneRepository,
    private readonly playerService: PlayerService
  ) {}

  async execute(command: StartGameCommand): Promise<GameStartedEvent> {
    // Lógica para iniciar el juego
  }
}
```

### Módulo de Jugador (Player)

#### Entidades de Dominio

```typescript
// modules/player/domain/entities/Player.ts
export class Player {
  constructor(
    private readonly id: PlayerId,
    private stats: PlayerStats,
    private readonly achievements: Achievement[]
  ) {}

  public updateStats(effects: StatEffects): void
  public addAchievement(achievement: Achievement): void
  public getStats(): PlayerStats
}

// modules/player/domain/entities/PlayerStats.ts
export class PlayerStats {
  constructor(
    private energy: Energy,
    private mood: Mood,
    private time: Time,
    private bugs: Bugs
  ) {}

  public applyEffects(effects: StatEffects): void
  public validate(): boolean
}
```

### Módulo de Escenas (Scenes)

#### Entidades de Dominio

```typescript
// modules/scenes/domain/entities/Scene.ts
export class Scene {
  constructor(
    private readonly id: SceneId,
    private readonly content: SceneContent,
    private readonly choices: Choice[],
    private readonly metadata: SceneMetadata
  ) {}

  public getAvailableChoices(): Choice[]
  public executeChoice(choiceId: ChoiceId): ChoiceResult
}

// modules/scenes/domain/entities/Choice.ts
export class Choice {
  constructor(
    private readonly id: ChoiceId,
    private readonly description: string,
    private readonly effects: StatEffects,
    private readonly nextScene: SceneId | null
  ) {}
}
```

### Módulo de Navegación (Navigation)

#### Servicios de Dominio

```typescript
// modules/navigation/domain/services/NavigationService.ts
export class NavigationService {
  constructor(
    private readonly router: Router,
    private readonly gameState: GameState
  ) {}

  public navigateToScene(sceneId: SceneId): Promise<void>
  public navigateToMenu(): Promise<void>
  public goBack(): Promise<void>
  public canNavigateBack(): boolean
}
```

## Modelos de Datos

### Configuración Centralizada

```typescript
// shared/config/GameConfig.ts
export interface GameConfig {
  readonly game: {
    readonly initialStats: PlayerStats
    readonly maxStats: PlayerStats
    readonly typingSpeed: number
    readonly autoSaveInterval: number
  }
  readonly ui: {
    readonly theme: ThemeConfig
    readonly animations: AnimationConfig
    readonly accessibility: AccessibilityConfig
  }
  readonly routes: {
    readonly game: string
    readonly menu: string
    readonly levels: string
    readonly achievements: string
  }
}

// shared/config/index.ts
export const gameConfig: GameConfig = {
  game: {
    initialStats: {
      energy: 50,
      mood: 50,
      time: 0,
      bugs: 0
    },
    maxStats: {
      energy: 100,
      mood: 100,
      time: 999,
      bugs: 999
    },
    typingSpeed: 10,
    autoSaveInterval: 30000
  },
  ui: {
    theme: {
      colors: {
        primary: 'hsl(167, 100%, 40%)',
        secondary: 'hsl(167, 100%, 20%)',
        background: 'hsl(0, 0%, 0%)',
        text: 'hsl(167, 100%, 40%)'
      }
    },
    animations: {
      typingSpeed: 10,
      transitionDuration: 300
    },
    accessibility: {
      highContrast: false,
      reducedMotion: false,
      screenReader: true
    }
  },
  routes: {
    game: '/ordenador-de-umbral',
    menu: '/',
    levels: '/niveles',
    achievements: '/logros'
  }
}
```

### Sistema de Tipos Mejorado

```typescript
// shared/types/core.ts
export type GameId = string & { readonly brand: unique symbol }
export type PlayerId = string & { readonly brand: unique symbol }
export type SceneId = string & { readonly brand: unique symbol }
export type ChoiceId = string & { readonly brand: unique symbol }

// shared/types/events.ts
export interface DomainEvent {
  readonly id: string
  readonly occurredOn: Date
  readonly type: string
}

export interface GameStartedEvent extends DomainEvent {
  readonly type: 'GameStarted'
  readonly gameId: GameId
  readonly playerId: PlayerId
}

export interface SceneChangedEvent extends DomainEvent {
  readonly type: 'SceneChanged'
  readonly previousScene: SceneId
  readonly currentScene: SceneId
}
```

## Manejo de Errores

### Sistema de Errores Tipados

```typescript
// shared/errors/GameError.ts
export abstract class GameError extends Error {
  abstract readonly code: string
  abstract readonly type: string
  
  constructor(message: string, public readonly cause?: Error) {
    super(message)
    this.name = this.constructor.name
  }
}

export class SceneNotFoundError extends GameError {
  readonly code = 'SCENE_NOT_FOUND'
  readonly type = 'SceneError'
}

export class InvalidPlayerStateError extends GameError {
  readonly code = 'INVALID_PLAYER_STATE'
  readonly type = 'PlayerError'
}

// shared/errors/ErrorHandler.ts
export class ErrorHandler {
  static handle(error: Error): ErrorResponse {
    if (error instanceof GameError) {
      return {
        type: 'game_error',
        code: error.code,
        message: error.message,
        userMessage: this.getUserMessage(error)
      }
    }
    
    return {
      type: 'unknown_error',
      code: 'UNKNOWN',
      message: 'Ha ocurrido un error inesperado',
      userMessage: 'Algo salió mal. Por favor, intenta de nuevo.'
    }
  }
}
```

## Estrategia de Testing

### Estructura de Pruebas

```typescript
// tests/game/domain/entities/Game.test.ts
describe('Game Entity', () => {
  describe('when starting a new game', () => {
    it('should initialize with correct default state', () => {
      // Arrange
      const gameId = GameId.create()
      const config = createTestGameConfig()
      
      // Act
      const game = new Game(gameId, GameState.initial(), config)
      game.start()
      
      // Assert
      expect(game.getCurrentState().isInitialized).toBe(true)
    })
  })
})

// tests/game/application/use-cases/StartGameUseCase.test.ts
describe('StartGameUseCase', () => {
  let useCase: StartGameUseCase
  let mockGameRepository: jest.Mocked<GameRepository>
  let mockSceneRepository: jest.Mocked<SceneRepository>
  
  beforeEach(() => {
    mockGameRepository = createMockGameRepository()
    mockSceneRepository = createMockSceneRepository()
    useCase = new StartGameUseCase(mockGameRepository, mockSceneRepository)
  })
  
  it('should start game successfully', async () => {
    // Test implementation
  })
})
```

### Configuración de Testing

```typescript
// tests/setup.ts
import { configure } from '@testing-library/react'
import '@testing-library/jest-dom'

configure({ testIdAttribute: 'data-testid' })

// Mock de Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  }),
  usePathname: () => '/',
}))
```

## Optimización de Rendimiento

### Lazy Loading y Code Splitting

```typescript
// modules/game/presentation/components/GameContainer.tsx
import { lazy, Suspense } from 'react'

const GameContent = lazy(() => import('./GameContent'))
const LoadingScreen = lazy(() => import('./LoadingScreen'))

export function GameContainer() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <GameContent />
    </Suspense>
  )
}
```

### Memoización y Optimización de Re-renders

```typescript
// modules/game/presentation/hooks/useGameState.ts
import { useMemo, useCallback } from 'react'
import { useGameStore } from '../stores/gameStore'

export function useGameState() {
  const state = useGameStore()
  
  const memoizedState = useMemo(() => ({
    currentScene: state.currentScene,
    isLoading: state.isLoading,
    error: state.error
  }), [state.currentScene, state.isLoading, state.error])
  
  const actions = useMemo(() => ({
    startGame: useCallback(() => state.startGame(), [state.startGame]),
    loadScene: useCallback((sceneId: SceneId) => state.loadScene(sceneId), [state.loadScene])
  }), [state.startGame, state.loadScene])
  
  return { state: memoizedState, actions }
}
```

### Gestión de Estado Optimizada

```typescript
// modules/game/presentation/stores/gameStore.ts
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface GameStore {
  state: GameState
  actions: GameActions
}

export const useGameStore = create<GameStore>()(
  subscribeWithSelector(
    immer((set, get) => ({
      state: {
        currentScene: null,
        isLoading: false,
        error: null
      },
      actions: {
        startGame: () => set((state) => {
          state.state.isLoading = true
        }),
        loadScene: (sceneId: SceneId) => set((state) => {
          state.state.currentScene = sceneId
        })
      }
    }))
  )
)
```

## Accesibilidad

### Implementación de ARIA y Navegación por Teclado

```typescript
// modules/game/presentation/components/GameChoice.tsx
interface GameChoiceProps {
  choice: Choice
  isSelected: boolean
  onSelect: () => void
  index: number
}

export function GameChoice({ choice, isSelected, onSelect, index }: GameChoiceProps) {
  return (
    <button
      role="option"
      aria-selected={isSelected}
      aria-describedby={`choice-description-${index}`}
      tabIndex={isSelected ? 0 : -1}
      onClick={onSelect}
      className={`game-choice ${isSelected ? 'selected' : ''}`}
    >
      <span id={`choice-description-${index}`}>
        {choice.description}
      </span>
    </button>
  )
}
```

### Soporte para Lectores de Pantalla

```typescript
// modules/game/presentation/hooks/useScreenReader.ts
export function useScreenReader() {
  const announce = useCallback((message: string) => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
    
    document.body.appendChild(announcement)
    
    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }, [])
  
  return { announce }
}
```

## Documentación Automatizada

### Configuración de TypeDoc

```typescript
// typedoc.json
{
  "entryPoints": ["src/modules"],
  "out": "docs/api",
  "theme": "default",
  "includeVersion": true,
  "excludePrivate": true,
  "excludeProtected": true,
  "excludeExternals": true,
  "readme": "README.md",
  "name": "Ordenadores de Umbral - API Documentation",
  "tsconfig": "tsconfig.json"
}
```

### Comentarios JSDoc Estructurados

```typescript
/**
 * Servicio principal para la gestión del estado del juego.
 * 
 * @example
 * ```typescript
 * const gameService = new GameService(gameRepository, sceneRepository)
 * const game = await gameService.startNewGame(playerId)
 * ```
 * 
 * @public
 */
export class GameService {
  /**
   * Inicia un nuevo juego para el jugador especificado.
   * 
   * @param playerId - Identificador único del jugador
   * @returns Promise que resuelve con el juego iniciado
   * 
   * @throws {@link PlayerNotFoundError} Cuando el jugador no existe
   * @throws {@link GameAlreadyExistsError} Cuando ya existe un juego activo
   */
  async startNewGame(playerId: PlayerId): Promise<Game> {
    // Implementation
  }
}
```
