import { Footer } from "./components/Footer/Footer";
import { Inicio } from "./components/Inicio/Inicio";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/Navbar/NavBar";
import { Nosotros } from "./components/Nosotros/Nosostros";
import { CartProvider } from "./context/CartContext";
import "./scss/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";
import { Contacto } from "./components/Contacto/Contacto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route
              path="/productos"
              element={
                <ItemListContainer
                  greeting={"Encontra los que necesitas para tu gatito"}
                />
              }
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
