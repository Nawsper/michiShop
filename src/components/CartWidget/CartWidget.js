import { FaOpencart } from "react-icons/fa";
import "../../scss/components/CartWidget/_CartWidget.scss";

export const CartWidget = () => {
  return (
    <div className="div__carrito">
      <FaOpencart className="icono__carrito" />
      <span>0</span>
    </div>
  );
};
