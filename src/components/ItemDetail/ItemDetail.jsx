import "../../scss/components/ItemDetail/_ItemDetail.scss";
import { Counter } from "../Counter/Counter";

export const ItemDetail = ({ image, title, description, price, stock }) => {
  return (
    <div className="itemDetail">
      <img className="itemDetail__img" src={image} alt={title} />
      <div className="itemDetail__div">
        <h2 className="itemDetail__div--h2">{title}</h2>
        <h3 className="itemDetail__div--h3">{description}</h3>
        <h6 className="itemDetail__div--h6">{price}</h6>
        <p className="itemDetail__div--p">{stock}</p>
        <Counter
          initial={0}
          stock={stock}
          addCart={(amount) => console.log("Cantidad agregada: ", amount)}
        />
      </div>
    </div>
  );
};
