// Re-exportar todas las escenas desde un solo lugar para facilitar las importaciones
export * from "./scenes";
export * from "./intro";
export * from "./philosophical";
export * from "./solid";

// Escena inicial del juego
export { introScene as initialScene } from "./intro";
