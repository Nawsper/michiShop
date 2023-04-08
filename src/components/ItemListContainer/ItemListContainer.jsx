import { useEffect, useState } from "react";
import "../../scss/components/ItemListContainer/_ItemListContainer.scss";
import callProducts from "../callProducts.js";
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
    <div className="container">
      <h2 className="list__h2">MichiProductos</h2>
      <p>{greeting}</p>
      <ItemList products={products} />
    </div>
  );
};
