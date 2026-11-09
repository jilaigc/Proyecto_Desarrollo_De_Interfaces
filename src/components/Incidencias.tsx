import { useState, useEffect } from 'react';
import TargetaIncidencia from './TargetaIncidencia';
import '../style/Incidencias.css';

interface Incidencia {
  id: number;
  title: string;
  completed: boolean;
}

function Incidencias() {
  const [incidencias, setIncidencias] = useState<Incidencia[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    // Limitamos a 8 elementos como indica el enunciado
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
      .then((res) => res.json())
      .then((data) => {
        setIncidencias(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al cargar incidencias:', error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <div className="loading">Cargando datos del servidor...</div>;
  }

  return (
    <div className="incidencias-container">
      <h2>Registro de Tareas e Incidencias</h2>
      <div className="cards-grid">
        {incidencias.map((inc) => (
          <TargetaIncidencia
            key={inc.id}
            title={inc.title}
            completed={inc.completed}
          />
        ))}
      </div>
    </div>
  );
}

export default Incidencias;