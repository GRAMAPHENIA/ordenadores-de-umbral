---
inclusion: always
---

# Principios de Arquitectura Limpia para Ordenadores de Umbral

## Reglas de Dependencias

1. **Regla de Dependencia**: Las dependencias del código fuente solo pueden apuntar hacia adentro. Nada en un círculo interno puede saber algo sobre algo en un círculo externo.

2. **Capas de la Aplicación**:
   - **Dominio**: Entidades, Value Objects, Servicios de Dominio
   - **Aplicación**: Casos de Uso, Servicios de Aplicación
   - **Infraestructura**: Repositorios, Adaptadores, Servicios Externos
   - **Presentación**: Componentes UI, Hooks, Stores

## Patrones a Seguir

### Entidades de Dominio
- Deben contener la lógica de negocio más importante
- No deben depender de frameworks externos
- Deben ser testeable sin dependencias externas

```typescript
// ✅ Correcto
export class Player {
  constructor(
    private readonly id: PlayerId,
    private stats: PlayerStats
  ) {}
  
  public updateStats(effects: StatEffects): void {
    this.stats = this.stats.applyEffects(effects)
  }
}

// ❌ Incorrecto - depende de framework
export class Player {
  constructor(private zustandStore: Store) {}
}
```

### Casos de Uso
- Un caso de uso por acción del usuario
- Deben orquestar entidades y servicios
- No deben contener lógica de presentación

```typescript
// ✅ Correcto
export class StartGameUseCase {
  async execute(command: StartGameCommand): Promise<Game> {
    const player = await this.playerRepository.findById(command.playerId)
    const game = new Game(GameId.create(), player)
    await this.gameRepository.save(game)
    return game
  }
}
```

### Repositorios
- Interfaces en el dominio, implementaciones en infraestructura
- Abstraen el acceso a datos
- Permiten testing con mocks

## Convenciones de Naming

- **Entidades**: Sustantivos (Player, Game, Scene)
- **Value Objects**: Sustantivos descriptivos (PlayerId, Energy, SceneContent)
- **Servicios**: Sustantivo + Service (PlayerService, NavigationService)
- **Casos de Uso**: Verbo + UseCase (StartGameUseCase, LoadSceneUseCase)
- **Repositorios**: Entidad + Repository (PlayerRepository, SceneRepository)

## Estructura de Archivos

```
modules/[dominio]/
├── domain/
│   ├── entities/
│   ├── value-objects/
│   ├── services/
│   └── repositories/ (interfaces)
├── application/
│   ├── use-cases/
│   └── services/
├── infrastructure/
│   ├── repositories/ (implementaciones)
│   └── adapters/
└── presentation/
    ├── components/
    ├── hooks/
    └── stores/
```