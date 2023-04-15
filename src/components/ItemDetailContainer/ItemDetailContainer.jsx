import "../../scss/components/ItemDetailContainer/_ItemDetailContainer.scss";
import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { callProductsById } from "../callProducts";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    callProductsById("1").then((response) => {
      setProduct(response);
    });
  }, []);

  return (
    <div className="itemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};
