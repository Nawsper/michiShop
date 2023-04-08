export const Item = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h5>{product.title}</h5>
      <p>{product.price}</p>
      <button>Ver detalles</button>
    </div>
  );
};
