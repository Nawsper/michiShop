import { FaOpencart } from "react-icons/fa";
import "../../scss/components/CartWidget/_CartWidget.scss";

export const CartWidget = () => {
  return (
    <div className="carrito">
      <FaOpencart className="carrito__icono" />
      <span>0</span>
    </div>
  );
};
