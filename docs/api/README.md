# Documentación de la API - Ordenadores de Umbral

Esta documentación describe la arquitectura, componentes y APIs del juego educativo "Ordenadores de Umbral".

## Estructura de la Documentación

### 📁 [Dominios](./dominios/)
Documentación de los módulos de dominio, entidades, casos de uso y repositorios.

### 🎨 [Componentes](./componentes/)
Documentación de todos los componentes React, props, hooks y eventos.

### 🗄️ [Estado](./estado/)
Documentación de stores, estado global, actions y selectors.

### ⚙️ [Configuración](./configuracion/)
Documentación de opciones de configuración, valores por defecto y personalización.

### 🏗️ [Arquitectura](./arquitectura/)
Diagramas de dependencias, flujo de datos y patrones arquitectónicos.

## Convenciones

- **Idioma**: Toda la documentación está en español
- **Ejemplos**: Incluye ejemplos funcionales y casos de uso reales
- **Diagramas**: Utiliza Mermaid para diagramas de flujo y arquitectura
- **Código**: Comentarios JSDoc en inglés, documentación en español

## Navegación Rápida

| Sección | Descripción |
|---------|-------------|
| [Entidades de Dominio](./dominios/entidades.md) | Player, Game, Scene, Choice |
| [Componentes del Juego](./componentes/game.md) | GameContainer, Scene, Choice, MainMenu |
| [Store Principal](./estado/game-store.md) | Estado global del juego con Zustand |
| [Configuración del Juego](./configuracion/game-config.md) | Configuración centralizada |
| [Patrones Arquitectónicos](./arquitectura/patrones.md) | Arquitectura hexagonal y clean architecture |

## Versión

Esta documentación corresponde a la versión **1.0.0** del proyecto.