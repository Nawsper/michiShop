import { useContext } from "react";
import "../../scss/components/Cart/_Cart.scss";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
  const { cart, clearCart, totalAmount, total } = useContext(CartContext);

  if (totalAmount === 0) {
    return (
      <div>
        <h1>Cart sin items</h1>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className="Button">
        Limpiar carrito
      </button>
      <Link to="/checkout" className="option">
        Checkout
      </Link>
    </div>
  );
};
