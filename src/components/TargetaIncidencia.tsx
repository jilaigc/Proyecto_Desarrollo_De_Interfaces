import "../style/TargetaIncidencia.css";

interface TargetaIncidenciaProps {
  title: string;
  completed: boolean;
}

function TargetaIncidencia({ title, completed }: TargetaIncidenciaProps) {
  return (
    // Aplicamos una clase CSS u otra dinámicamente según si está completada o pendiente
    <div className={`targeta-incidencia ${completed ? 'resuelta' : 'pendiente'}`}>
      <h4>{title}</h4>
      <p><strong>Estado:</strong> {completed ? 'Resuelta ✅' : 'Pendiente ⏳'}</p>
    </div>
  );
}

export default TargetaIncidencia;