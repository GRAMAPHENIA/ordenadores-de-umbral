# Módulos de Dominio

Los módulos de dominio contienen la lógica de negocio central del juego, siguiendo los principios de arquitectura limpia.

## Estructura de Módulos

```
modules/
├── game/           # Gestión del estado general del juego
├── player/         # Estadísticas y progreso del jugador  
├── scenes/         # Contenido narrativo del juego
└── navigation/     # Manejo de rutas y transiciones
```

## Entidades Principales

### [Player](./entidades/player.md)
Representa al jugador con sus estadísticas, progreso y estado actual.

### [Game](./entidades/game.md)
Coordina el estado general del juego y la interacción entre módulos.

### [Scene](./entidades/scene.md)
Contiene el contenido narrativo y las opciones disponibles para el jugador.

### [Choice](./entidades/choice.md)
Representa una decisión que puede tomar el jugador con sus efectos.

## Value Objects

### [PlayerStats](./value-objects/player-stats.md)
Encapsula las estadísticas del jugador (energía, humor, tiempo, errores).

### [SceneContent](./value-objects/scene-content.md)
Contiene el texto y metadatos de una escena.

### [StatEffects](./value-objects/stat-effects.md)
Define los efectos que una elección tiene sobre las estadísticas del jugador.

## Casos de Uso

### [StartGameUseCase](./use-cases/start-game.md)
Inicializa un nuevo juego con el estado inicial del jugador.

### [LoadSceneUseCase](./use-cases/load-scene.md)
Carga una nueva escena y actualiza el historial de navegación.

### [ExecuteChoiceUseCase](./use-cases/execute-choice.md)
Procesa la elección del jugador y aplica sus efectos.

### [UpdatePlayerStatsUseCase](./use-cases/update-player-stats.md)
Actualiza las estadísticas del jugador aplicando efectos.

## Repositorios

### [PlayerRepository](./repositories/player-repository.md)
Interfaz para persistir y recuperar datos del jugador.

### [SceneRepository](./repositories/scene-repository.md)
Interfaz para acceder al contenido de las escenas.

### [GameRepository](./repositories/game-repository.md)
Interfaz para persistir el estado del juego.

## Servicios de Dominio

### [GameProgressService](./services/game-progress-service.md)
Calcula el progreso del jugador y desbloquea contenido.

### [StatCalculationService](./services/stat-calculation-service.md)
Maneja los cálculos complejos de estadísticas y efectos.

### [SceneNavigationService](./services/scene-navigation-service.md)
Gestiona la navegación entre escenas y valida transiciones.