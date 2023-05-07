import { FaOpencart } from "react-icons/fa";
import "../../scss/components/CartWidget/_CartWidget.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { totalAmmount } = useContext(CartContext);

  return (
    <div className="carrito">
      <Link
        to="/cart"
        className="cartWidget"
        style={{ display: totalAmmount > 0 ? "flex" : "none" }}
      >
        <FaOpencart className="carrito__icono" />
        {totalAmmount}
      </Link>
      <span>0</span>
    </div>
  );
};
