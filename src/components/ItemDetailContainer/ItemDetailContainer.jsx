import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productsAdapted = { id: response.id, ...data };
        setProduct(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="itemDetailContainer">
      {loading ? (
        <p className="itemDetailContainer__p">Cargando producto...</p>
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  );
};
