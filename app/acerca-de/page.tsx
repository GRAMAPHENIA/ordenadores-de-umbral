"use client";

import { useState } from "react";
import { Code, BookOpen, Terminal } from "lucide-react";
import { NavigationHeader } from "@/components/ui/NavigationHeader";

export default function AboutPage() {
  const [isExiting] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col p-6 md:p-8 transition-opacity duration-300 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      <NavigationHeader title="ACERCA DEL PROYECTO" />

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-teal-400 font-mono tracking-wider">
          ACERCA DEL PROYECTO
        </h1>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-teal-500/20">
          <p className="text-slate-200 mb-6 leading-relaxed">
            Ordenadores de Umbral es un proyecto educativo interactivo que explora conceptos fundamentales de lógica y programación a través de una experiencia inmersiva con estética retro.
          </p>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Inspirado en las primeras interfaces de computadoras personales, este simulador te lleva a través de diferentes niveles donde podrás aprender y practicar conceptos esenciales de programación de una manera visual y atractiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-teal-500/20">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 mr-3 text-teal-400" />
              <h2 className="text-xl font-semibold text-teal-300">Tecnologías</h2>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li>• Next.js 14 con App Router</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• React Hooks</li>
              <li>• Lucide Icons</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-teal-500/20">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 mr-3 text-teal-400" />
              <h2 className="text-xl font-semibold text-teal-300">Características</h2>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li>• Interfaz de usuario interactiva</li>
              <li>• Niveles progresivos</li>
              <li>• Retroalimentación en tiempo real</li>
              <li>• Modo oscuro por defecto</li>
              <li>• Diseño responsivo</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl border border-teal-500/20">
          <div className="flex items-center mb-4">
            <Terminal className="w-6 h-6 mr-3 text-teal-400" />
            <h2 className="text-xl font-semibold text-teal-300">Objetivos de Aprendizaje</h2>
          </div>
          <ul className="space-y-3 text-slate-300 list-disc pl-5">
            <li>Comprender los fundamentos de la lógica de programación</li>
            <li>Familiarizarse con estructuras de control básicas</li>
            <li>Desarrollar habilidades de resolución de problemas</li>
            <li>Explorar conceptos de algoritmos de manera visual</li>
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-teal-500/20 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Ordenadores de Umbral - Proyecto Educativo
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Desarrollado con pasión por el aprendizaje y la enseñanza de la programación
          </p>
        </div>
      </div>
    </div>
  );
}
