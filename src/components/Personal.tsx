import { useState, useEffect } from 'react';
import TargetaPersonal from './TargetaPersonal';
import '../style/Personal.css';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}



function Personal() {


  const [empleados, setEmpleados] = useState<User[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  
  // Estado para lo que el usuario escribe libremente en el input
  const [inputTexto, setInputTexto] = useState<string>('');
  
  // Estado que almacena el término real de búsqueda (solo cambia al pulsar el botón)
  const [terminoBusqueda, setTerminoBusqueda] = useState<string>('');

  useEffect(() => {fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setEmpleados(data);
        setCargando(false);
      })
      .catch((error) => {console.error('Error al cargar los datos:', error);
        setCargando(false);
      });
  }, []);



  // Función que se ejecuta al hacer clic en el botón

  const handleBuscar = () => {setTerminoBusqueda(inputTexto); // Pasa el texto del input al filtro definitivo
  };

  // El filtrado solo usa 'terminoBusqueda', por lo que no se actualiza hasta que das al botón
  const empleadosFiltrados = empleados.filter((emp) => emp.name.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  if (cargando) {
    return <div className="loading">Cargando datos del servidor...</div>;
  }

  return (
    <div className="personal-container">
      <h2>Directorio de Personal</h2>
      
      {/* Contenedor en línea para el input y el botón */}
      <div className="search-bar-container">
        <input type="text" placeholder="Escribe el nombre del empleado..." value={inputTexto} onChange={(e) => setInputTexto(e.target.value)} className="search-input"
        />
        <button onClick={handleBuscar} className="search-btn">
          Buscar
        </button>
      </div>

      <div className="cards-grid">
        {empleadosFiltrados.map((emp) => (
            <TargetaPersonal
            key={emp.id}
            name={emp.name}
            email={emp.email}
            city={emp.address.city}
            />
        ))}
      </div>
    </div>
  );
}

export default Personal;