import "../../scss/components/ItemDetailContainer/_ItemDetailContainer.scss";
import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { callProductsById } from "../callProducts";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    callProductsById(itemId).then((response) => {
      setProduct(response);
    });
  }, [itemId]);

  return (
    <div className="itemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};
