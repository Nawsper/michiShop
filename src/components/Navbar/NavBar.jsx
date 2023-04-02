import "../../scss/components/Navbar/_NavBar.scss";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <header className="header">
      <div className="header__div">
        <img
          className="header__div--presentacion"
          src="./img/presentacion.png"
          alt="bigotes gato"
        />
      </div>
      <div className="header__nav">
        <div className="header__nav--div">
          <img
            className="header__nav--div__logo"
            src="./img/logo.png"
            alt="logo"
          />
          <h1 className="header__nav--div__h1">Michi Shop</h1>
        </div>
        <nav className="header__nav--menu">
          <ul className="header__nav--menu__ul">
            <p className="header__nav--menu__ul--li inicio">Inicio</p>
            <p className="header__nav--menu__ul--li nosotros">Nosotros</p>
            <p className="header__nav--menu__ul--li productos">Productos</p>
            <p className="header__nav--menu__ul--li contacto">Contacto</p>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};
