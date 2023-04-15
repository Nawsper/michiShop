import "../../scss/components/ItemDetail/_ItemDetail.scss";
import { Counter } from "../Counter/Counter";

export const ItemDetail = ({ image, title, description, price, stock }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h6>{price}</h6>
        <p>{stock}</p>
        <Counter
          initial={0}
          stock={stock}
          addCart={(amount) => console.log("Cantidad agregada: ", amount)}
        />
      </div>
    </div>
  );
};
