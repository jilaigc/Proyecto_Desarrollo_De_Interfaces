import '../style/TargetaPersonal.css';

interface TargetaPersonalProps {
  name: string;
  email: string;
  city: string;
}

function TargetaPersonal({ name, email, city }: TargetaPersonalProps) {
  return (
    <div className="targeta-empleado">
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Ciudad:</strong> {city}</p>
    </div>
  );
}

export default TargetaPersonal;