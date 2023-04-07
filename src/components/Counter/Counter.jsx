import { useState } from "react";
import "../../scss/components/Counter/_counter.scss";

export const Counter = ({ initial, stock, addCart }) => {
  const [amount, setAmount] = useState(initial);

  const add = () => {
    if (amount < stock) {
      setAmount(amount + 1);
    }
  };

  const rest = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="counter">
      <div className="counter__controls">
        <button className="counter__controls--rest" onClick={rest}>
          -
        </button>
        <h4 className="counter__controls--amount">{amount}</h4>
        <button className="counter__controls--add" onClick={add}>
          +
        </button>
      </div>
      <div className="counter__btnCart">
        <button
          className="counter__btnCart--addCart"
          onClick={() => addCart(amount)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
