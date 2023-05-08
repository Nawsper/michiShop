import "../../scss/components/CartItem/_CartItem.scss";
// import { CartContext } from "../../context/CartContext";
import { useState } from "react";

export const CartItem = ({ image, title, price }) => {
  const [amountAdded, setAmountAdded] = useState(0);

  return (
    <div>
      <h2 classNameName="main__titulo">Carrito</h2>
      <div className="main__carrito">
        <div
          id="main__carrito--productos"
          className="main__carrito--productos disable"
        >
          <img className="carrito__prod--img" src={image} alt={title} />
          <div class="carrito__prod--titulo">
            <small>Título</small>
            <h3>{title}</h3>
          </div>
          <div class="carrito__prod--cant">
            <small>Cantidad</small>
            <p>${amountAdded}</p>
          </div>
          <div class="carrito__prod--precio">
            <small>Precio</small>
            <p>${price}</p>
          </div>
          <div class="carrito__prod--subtotal">
            <small>Subtotal</small>
            <p>${price * amountAdded}</p>
          </div>
          <button class="carrito__prod--eliminar" id="${producto.id}">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
