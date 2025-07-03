import { Power, Zap, Brain, Terminal } from 'lucide-react';

interface HeaderProps {
  currentSceneId: string;
  energy?: number;
}

export function Header({ currentSceneId, energy = 100 }: HeaderProps) {
  return (
    <div className="flex justify-between items-center p-2 text-xs border-b border-teal-900/50 flex-shrink-0">
      <div className="flex items-center space-x-2">
        <Power className="w-4 h-4 text-teal-400" />
        <span className="text-teal-300 font-medium">GRAPHOS</span>
      </div>
      <div className="flex items-center space-x-3 text-teal-400/90">
        <div className="flex items-center space-x-1">
          <Zap className="w-3.5 h-3.5 text-teal-400" />
          <span className="whitespace-nowrap">{energy}%</span>
        </div>
        <span>•</span>
        <div className="flex items-center space-x-1">
          <Brain className="w-3.5 h-3.5 text-teal-400" />
          <span className="whitespace-nowrap">APRENDIZAJE</span>
        </div>
        <span>•</span>
        <div className="flex items-center space-x-1">
          <Terminal className="w-3.5 h-3.5 text-teal-400" />
          <span className="text-teal-300 whitespace-nowrap">
            {currentSceneId.toUpperCase().substring(0, 12)}
          </span>
        </div>
      </div>
    </div>
  );
}
