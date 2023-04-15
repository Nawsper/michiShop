import { useEffect, useState } from "react";
import "../../scss/components/ItemListContainer/_ItemListContainer.scss";
import { callProducts } from "../callProducts.js";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    callProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="itemListContainer">
      <h2 className="itemListContainer__h2">MichiProductos</h2>
      <p className="itemListContainer__p">{greeting}</p>
      <div className="itemListContainer__div">
        <ItemList products={products} />
      </div>
    </div>
  );
};
