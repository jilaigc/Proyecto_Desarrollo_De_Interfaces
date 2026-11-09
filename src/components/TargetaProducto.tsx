import '../style/TargetaProducto.css';

interface TargetaProductoProps {
  title: string;
  price: number;
  image: string;
  category: string;
}

function TargetaProducto({ title, price, image, category }: TargetaProductoProps) {
  // Condicional para saber si supera los $50
  const esAltoValor = price > 50;

  return (
    <div className="targeta-producto">
      <img src={image} alt={title} className="producto-img" />
      <h3>{title}</h3>
      <p><strong>Categoría:</strong> {category}</p>
      <p><strong>Precio:</strong> ${price}</p>
      
      {/* Renderizado condicional de la etiqueta de Alto Valor */}
      {esAltoValor && <span className="badge-alto-valor">Activo de Alto Valor</span>}
    </div>
  );
}

export default TargetaProducto;