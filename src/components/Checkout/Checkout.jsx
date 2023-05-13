import "../../scss/components/Checkout/_Checkout.scss";
import { useContext } from "react";
import { useState } from "react";
import { db } from "../../config/firebase";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import { Timestamp, writeBatch } from "firebase/firestore";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { CartContext } from "../../context/CartContext";

export const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.amount;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");

        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("Producto sin stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1 className="checkout__h1">Se esta generando su orden...</h1>;
  }

  if (orderId) {
    return <h1 className="checkout__h1">El Id de su compra es: {orderId}</h1>;
  }

  return (
    <div className="checkout">
      <h1 className="checkout__h1">Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};
