import "../../scss/components/Item/_Item.scss";
import { Link } from "react-router-dom";

export const Item = ({ product: { id, image, title, price, stock } }) => {
  return (
    <div className="card">
      <img className="card__img" src={image} alt={title} />
      <h5 className="card__h5">{title}</h5>
      <p className="card__price">${price}</p>
      <p className="card__stock">Stock disponible: {stock}</p>
      <Link to={`/item/${id}`} className="card__button">
        Ver detalles
      </Link>
    </div>
  );
};
