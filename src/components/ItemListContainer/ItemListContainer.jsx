import { useEffect, useState } from "react";
import "../../scss/components/ItemListContainer/_ItemListContainer.scss";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="itemListContainer">
      {loading ? (
        <p className="itemListContainer__p">Cargando producto...</p>
      ) : (
        <>
          <h2 className="itemListContainer__h2">MichiProductos</h2>
          <h4 className="itemListContainer__h4">{categoryId}</h4>
          <p className="itemListContainer__p">{greeting}</p>
          <div className="itemListContainer__div">
            <ItemList products={products} />
          </div>
        </>
      )}
    </div>
  );
};
