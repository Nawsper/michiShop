import { useContext, useState } from "react";
import "../../scss/components/ItemDetail/_ItemDetail.scss";
import { Counter } from "../Counter/Counter";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { inCart } from "../../context/CartContext";

export const ItemDetail = ({ id, image, title, description, price, stock }) => {
  const [amountAdded, setAmountAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleAddCart = (amount) => {
    setAmountAdded(amount);

    const item = {
      id,
      title,
      price,
    };

    addItem(item, amount);
  };

  return (
    <div className="itemDetail">
      <img className="itemDetail__img" src={image} alt={title} />
      <div className="itemDetail__div">
        <h2 className="itemDetail__div--h2">{title}</h2>
        <h3 className="itemDetail__div--h3">{description}</h3>
        <h6 className="itemDetail__div--h6">${price}</h6>
        <p className="itemDetail__div--p">Stock disponible: {stock}</p>

        {amountAdded > 0 ? (
          <div>
            {inCart ? (
              <p className="itemDetail__div--amount">
                Has seleccionado {amountAdded} producto/s
              </p>
            ) : (
              <p className="itemDetail__div--amount">
                Este producto ya estaba en tu carrito
              </p>
            )}
            <Link to="/cart" className="itemDetail__div--link">
              Ver carrito
            </Link>
          </div>
        ) : (
          <Counter initial={0} stock={stock} addCart={handleAddCart} />
        )}
      </div>
    </div>
  );
};
