# Ordenadores de Umbral - Documentación del Proyecto

## Descripción General

**Ordenadores de Umbral** es un juego educativo interactivo que enseña principios de desarrollo de software a través de una narrativa inmersiva con estética retro/terminal. El juego utiliza una interfaz de línea de comandos simulada donde los jugadores toman decisiones que afectan su estado (energía, humor, tiempo, errores) mientras aprenden conceptos como principios SOLID, filosofía de programación y mejores prácticas.

## Arquitectura Actual

### Tecnologías Principales
- **Framework**: Next.js 15.2.4 con React 19
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS con tema personalizado retro
- **Estado**: Zustand para manejo de estado global
- **Componentes UI**: Radix UI + shadcn/ui
- **Animaciones**: Framer Motion

### Estructura del Proyecto

```
ordenadores-de-umbral/
├── app/                    # Enrutador de aplicación de Next.js
│   ├── page.tsx           # Menú principal
│   ├── layout.tsx         # Diseño global con efectos CRT
│   ├── ordenador-de-umbral/ # Página del juego
│   ├── niveles/           # Selector de niveles
│   ├── logros/            # Sistema de logros
│   └── acerca-de/         # Información del proyecto
├── components/
│   ├── game/              # Componentes del juego
│   │   ├── ui/           # Interfaces de usuario
│   │   ├── effects/      # Efectos visuales
│   │   ├── status/       # Barras de estado
│   │   └── ...
│   ├── layout/           # Componentes de diseño
│   └── ui/               # Componentes UI reutilizables
├── data/
│   └── scenes/           # Definición de escenas del juego
├── lib/
│   ├── types.ts          # Tipos TypeScript
│   ├── store.ts          # Estado global con Zustand
│   └── utils.ts          # Utilidades
└── public/               # Recursos estáticos
```

## Componentes Principales

### 1. ContenedorJuego (GameContainer)
- **Ubicación**: `components/game/game-container.tsx`
- **Responsabilidad**: Coordinador principal del juego
- **Funciones**: Manejo de navegación, inicialización, eventos de teclado

### 2. Almacén (Store) con Zustand
- **Ubicación**: `lib/store.ts`
- **Responsabilidad**: Estado global del juego
- **Estado**: energía, humor, tiempo, errores, escena actual, historial

### 3. Sistema de Escenas
- **Ubicación**: `data/scenes/`
- **Responsabilidad**: Definición de narrativa y opciones
- **Estructura**: Escenas con texto, opciones y efectos

### 4. Componentes de Interfaz
- **Ubicación**: `components/game/ui/`
- **Responsabilidad**: Interfaces específicas del juego
- **Componentes**: ConsoleUI, LoadingScreen, GameContent

## Características Actuales

### ✅ Implementado
- Menú principal con navegación por teclado
- Sistema de escenas interactivas
- Estado del jugador (energía, humor, tiempo, errores)
- Efectos visuales CRT/retro
- Carga dinámica de componentes
- Navegación entre páginas
- Sistema básico de logros
- Selector de niveles

### 🚧 En Desarrollo
- Contenido educativo completo
- Sistema de progresión
- Persistencia de datos
- Más efectos visuales

## Problemas Identificados

### Arquitectura
1. **Acoplamiento fuerte**: ContenedorJuego maneja demasiadas responsabilidades
2. **Estructura de carpetas**: Mezcla de responsabilidades en `components/game/`
3. **Estado global**: Almacén muy grande con múltiples responsabilidades
4. **Tipos**: Definiciones de tipos dispersas y básicas

### Código
1. **Duplicación**: Lógica repetida en diferentes componentes
2. **Valores fijos**: URLs y configuraciones codificadas directamente
3. **Manejo de errores**: Falta manejo consistente de errores
4. **Pruebas**: No hay pruebas implementadas

### UX/UI
1. **Responsividad**: Adaptación limitada a diferentes pantallas
2. **Accesibilidad**: Falta soporte para lectores de pantalla
3. **Rendimiento**: Carga de componentes no optimizada

## Objetivos de Refactorización

### 1. Modularización
- Separar responsabilidades por dominio
- Crear módulos independientes y reutilizables
- Implementar arquitectura hexagonal/limpia

### 2. Mejores Prácticas
- Implementar patrones de diseño apropiados
- Añadir pruebas exhaustivas
- Mejorar manejo de errores
- Optimizar rendimiento

### 3. Mantenibilidad
- Documentación completa
- Código autodocumentado
- Configuración centralizada
- Registro de eventos estructurado

### 4. Escalabilidad
- Sistema de complementos para nuevos módulos
- API para contenido dinámico
- Soporte multiidioma
- Persistencia de datos

## Próximos Pasos

1. **Crear especificaciones detalladas** para cada módulo de refactorización
2. **Implementar arquitectura limpia** con separación de capas
3. **Desarrollar sistema de pruebas** con cobertura completa
4. **Optimizar rendimiento** y experiencia de usuario
5. **Documentar APIs** y patrones de uso