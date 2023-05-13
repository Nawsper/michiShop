import "../../scss/components/CheckoutForm/_CheckoutForm.scss";
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
            required
          />
        </label>
        <label className="checkoutForm__form--label">
          Teléfono:
          <input
            className="checkoutForm__form--label--input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            required
          />
        </label>
        <label className="checkoutForm__form--label">
          Email:
          <input
            className="checkoutForm__form--label--input"
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Por favor ingresa un correo electrónico válido"
            required
          />
        </label>
        <button className="checkoutForm__form--label--button" type="submit">
          Finalizar compra
        </button>
      </form>
    </div>
  );
};
