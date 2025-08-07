---
inclusion: always
---

# Contexto del Proyecto - Ordenadores de Umbral

## Descripción del Proyecto

"Ordenadores de Umbral" es un juego educativo interactivo que enseña principios de desarrollo de software a través de una narrativa inmersiva con estética retro/terminal. El juego simula una interfaz de línea de comandos donde los jugadores toman decisiones que afectan su estado mientras aprenden conceptos de programación.

## Objetivos del Proyecto

### Educativos
- Enseñar principios SOLID de programación orientada a objetos
- Introducir conceptos de arquitectura de software
- Demostrar mejores prácticas de desarrollo
- Fomentar el pensamiento crítico sobre diseño de software

### Técnicos
- Implementar arquitectura limpia y modular
- Demostrar patrones de diseño en acción
- Crear código mantenible y escalable
- Establecer estándares de calidad altos

## Audiencia Objetivo

- **Desarrolladores junior** aprendiendo principios fundamentales
- **Estudiantes de programación** buscando ejemplos prácticos
- **Desarrolladores experimentados** interesados en arquitectura limpia
- **Educadores** que necesitan herramientas interactivas de enseñanza

## Características Clave del Juego

### Mecánicas de Juego
- **Sistema de estadísticas**: Energía, humor, tiempo, errores
- **Narrativa ramificada**: Decisiones que afectan el progreso
- **Sistema de logros**: Reconocimiento del progreso del jugador
- **Progresión por niveles**: Contenido estructurado y escalable

### Estética y UX
- **Tema retro/terminal**: Estética de computadora vintage
- **Navegación por teclado**: Experiencia auténtica de terminal
- **Efectos de escritura**: Texto que aparece gradualmente
- **Efectos visuales CRT**: Simulación de monitor antiguo

## Arquitectura Actual vs Objetivo

### Estado Actual
- Estructura monolítica con componentes acoplados
- Estado global centralizado en un solo store
- Lógica de negocio mezclada con presentación
- Configuración dispersa en múltiples archivos

### Estado Objetivo
- Arquitectura hexagonal con capas bien definidas
- Módulos independientes por dominio
- Separación clara de responsabilidades
- Configuración centralizada y tipada

## Dominios del Negocio

### Juego (Game)
- Gestión del estado general del juego
- Coordinación entre módulos
- Persistencia del progreso

### Jugador (Player)
- Estadísticas y progreso del jugador
- Sistema de logros
- Personalización y preferencias

### Escenas (Scenes)
- Contenido narrativo del juego
- Sistema de opciones y ramificaciones
- Efectos de las decisiones

### Navegación (Navigation)
- Manejo de rutas y transiciones
- Historial de navegación
- Integración con Next.js

## Tecnologías y Herramientas

### Stack Principal
- **Next.js 15**: Framework React con App Router
- **TypeScript**: Tipado estático y desarrollo robusto
- **Zustand**: Gestión de estado reactivo
- **Tailwind CSS**: Estilos utilitarios y tema personalizado
- **Framer Motion**: Animaciones fluidas

### Herramientas de Desarrollo
- **Jest + Testing Library**: Testing unitario e integración
- **ESLint + Prettier**: Calidad y consistencia de código
- **TypeDoc**: Documentación automática de APIs
- **Playwright**: Testing end-to-end

## Convenciones del Proyecto

### Naming
- **Archivos**: kebab-case para archivos, PascalCase para componentes
- **Variables**: camelCase para variables y funciones
- **Constantes**: UPPER_SNAKE_CASE para constantes globales
- **Tipos**: PascalCase para interfaces y tipos

### Estructura de Commits
- `feat:` para nuevas características
- `fix:` para corrección de errores
- `refactor:` para refactorización de código
- `docs:` para cambios en documentación
- `test:` para añadir o modificar pruebas

### Idioma
- **Código**: Inglés para nombres de variables, funciones y comentarios técnicos
- **Contenido**: Español para texto del juego y documentación de usuario
- **Documentación**: Español para documentación del proyecto

## Referencias Importantes

### Archivos de Configuración
- `#[[file:shared/config/GameConfig.ts]]` - Configuración centralizada
- `#[[file:.kiro/specs/refactorizacion-arquitectura-modular/design.md]]` - Diseño de arquitectura

### Componentes Clave
- `GameContainer` - Coordinador principal del juego
- `ConsoleUI` - Interfaz principal de terminal
- `Scene` - Representación de contenido narrativo
- `Player` - Entidad del jugador con estadísticas

### Datos del Juego
- `#[[file:data/scenes/]]` - Contenido narrativo actual
- `#[[file:lib/store.ts]]` - Estado global actual
- `#[[file:lib/types.ts]]` - Definiciones de tipos actuales