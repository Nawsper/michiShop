import { useState } from "react";

export const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div className="checkoutForm">
      <form onSubmit={handleConfirm} className="checkoutForm__form">
        <label className="checkoutForm__form--label">
          Nombre:
          <input
            className="checkoutForm__form--label--input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className="checkoutForm__form--label">
          Teléfono:
          <input
            className="checkoutForm__form--label--input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className="checkoutForm__form--label">
          Email:
          <input
            className="checkoutForm__form--label--input"
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <button className="checkoutForm__form--label--button" type="submit">
          Finalizar compra
        </button>
      </form>
    </div>
  );
};
