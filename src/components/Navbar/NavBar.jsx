import "../../scss/components/Navbar/_NavBar.scss";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <header className="header">
      <div className="header__div">
        <h1 className="header__h1">Michi Shop</h1>
      </div>
      <div className="header__nav">
        <img className="header__logo" src="./img/logo.png" alt="logo" />
        <nav className="nav">
          <ul className="nav__ul">
            <button className="nav__ul--li">Inicio</button>
            <button className="nav__ul--li">Nosotros</button>
            <button className="nav__ul--li">Productos</button>
            <button className="nav__ul--li">Contacto</button>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};
