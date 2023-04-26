import { useEffect, useState } from "react";
import "../../scss/components/ItemListContainer/_ItemListContainer.scss";
import { callProducts, callProductsByCategory } from "../callProducts.js";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const callFunc = categoryId ? callProductsByCategory : callProducts;

    callFunc(categoryId)
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="itemListContainer">
      <h2 className="itemListContainer__h2">MichiProductos</h2>
      <h4 className="itemListContainer__h4">{categoryId}</h4>
      <p className="itemListContainer__p">{greeting}</p>
      <div className="itemListContainer__div">
        <ItemList products={products} />
      </div>
    </div>
  );
};
