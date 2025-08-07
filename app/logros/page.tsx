import { Trophy, Award, CheckCircle, Lock } from "lucide-react";

type Logro = {
  id: string;
  titulo: string;
  descripcion: string;
  icono: React.ReactNode;
  desbloqueado: boolean;
  fechaDesbloqueo?: string;
};

export default function LogrosPage() {
  // Datos de ejemplo - en un caso real, esto vendría del store
  const logros: Logro[] = [
    {
      id: 'primer_paso',
      titulo: 'Primeros Pasos',
      descripcion: 'Completa el tutorial',
      icono: <Trophy className="w-6 h-6 text-yellow-400" />,
      desbloqueado: true,
      fechaDesbloqueo: '2023-01-01',
    },
    {
      id: 'experto_dry',
      titulo: 'Experto en DRY',
      descripcion: 'Aplica el principio DRY en 5 niveles',
      icono: <Award className="w-6 h-6 text-blue-400" />,
      desbloqueado: true,
      fechaDesbloqueo: '2023-01-02',
    },
    {
      id: 'coleccionista',
      titulo: 'Coleccionista',
      descripcion: 'Desbloquea 10 logros',
      icono: <Award className="w-6 h-6 text-purple-400" />,
      desbloqueado: false,
    },
  ];

  return (
    <div className="container mx-auto p-4 pt-24">
      <h1 className="text-3xl font-bold text-teal-400 mb-8">Logros</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {logros.map((logro) => (
          <div 
            key={logro.id}
            className={`rounded-lg p-6 border transition-all ${
              logro.desbloqueado 
                ? 'bg-gray-800/50 border-teal-500/20 hover:border-teal-500/50' 
                : 'bg-gray-800/20 border-gray-700/50'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-full ${
                logro.desbloqueado ? 'bg-teal-500/10' : 'bg-gray-700/50'
              }`}>
                {logro.desbloqueado ? logro.icono : <Lock className="w-6 h-6 text-gray-500" />}
              </div>
              <div className="flex-1">
                <h3 className={`text-lg font-medium ${
                  logro.desbloqueado ? 'text-white' : 'text-gray-500'
                }`}>
                  {logro.desbloqueado ? logro.titulo : 'Logro bloqueado'}
                </h3>
                <p className={`text-sm ${
                  logro.desbloqueado ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {logro.descripcion}
                </p>
                {logro.desbloqueado && logro.fechaDesbloqueo && (
                  <p className="text-xs text-gray-400 mt-2">
                    Desbloqueado el {new Date(logro.fechaDesbloqueo).toLocaleDateString()}
                  </p>
                )}
              </div>
              {logro.desbloqueado && (
                <CheckCircle className="w-5 h-5 text-teal-400" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
