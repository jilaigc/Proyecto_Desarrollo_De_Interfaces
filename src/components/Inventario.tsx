import { useState, useEffect } from 'react';
import TargetaProducto from './TargetaProducto';
import '../style/Inventario.css';

interface Producto {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

function Inventario() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {fetch('https://fakestoreapi.com/products?limit=6').then((res) => res.json()).then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al cargar inventario:', error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <div className="loading">Cargando datos del servidor...</div>;
  }

  return (
    <div className="inventario-container">
      <h2>Inventario de Activos y Material</h2>
      <div className="cards-grid">
        {productos.map((prod) => (
          <TargetaProducto
            key={prod.id}
            title={prod.title}
            price={prod.price}
            image={prod.image}
            category={prod.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Inventario;