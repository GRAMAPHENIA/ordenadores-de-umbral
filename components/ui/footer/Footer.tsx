import { User, Terminal as TerminalIcon, HelpCircle } from 'lucide-react';

export function Footer() {
  return (
    <div className="mt-auto">
      <div className="h-px bg-teal-900/50 my-1"></div>
      <div className="flex justify-between items-center text-xs text-teal-500/80 py-2 px-4 bg-black/30">
        <div className="flex items-center space-x-2">
          <User className="w-3.5 h-3.5 text-teal-400" />
          <span className="truncate">PROGRAMADOR</span>
        </div>
        <div className="flex items-center space-x-2">
          <TerminalIcon className="w-3.5 h-3.5 text-teal-400" />
          <span className="whitespace-nowrap">TERMINAL ACTIVA</span>
        </div>
        <div className="flex items-center space-x-2">
          <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
          <span className="text-teal-400">F1</span>
        </div>
      </div>
    </div>
  );
}
