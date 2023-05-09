import { useContext } from "react";
import "../../scss/components/Cart/_Cart.scss";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
  const { cart, clearCart, totalAmount, total } = useContext(CartContext);

  if (totalAmount === 0) {
    return (
      <div className="carrito">
        <h1 className="carrito__vacio">El carrito está vacío</h1>
        <Link to="/productos" className="carrito__optionProductos">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="carritoItems">
      <h2 className="carritoItems__titulo">Carrito</h2>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <div className="carritoItems__div">
        <button
          onClick={() => clearCart()}
          className="carritoItems__div--button"
        >
          Limpiar carrito
        </button>
        <div className="carritoItems__div--div">
          <Link to="/productos" className="carritoItems__div--optionProductos">
            Productos
          </Link>
        </div>
        <div className="carritoItems__div--option">
          <h3 className="carritoItems__div--option--total">Total: ${total}</h3>
          <Link to="/checkout" className="carritoItems__div--option--link">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
};
