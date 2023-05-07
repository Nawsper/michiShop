import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, amount) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, amount }]);
    } else {
      console.error("El producto ya fue agragado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdate = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdate);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const totalAmmount = cart.reduce((acc, producto) => acc + producto.amount, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalAmmount }}
    >
      {children}
    </CartContext.Provider>
  );
};
