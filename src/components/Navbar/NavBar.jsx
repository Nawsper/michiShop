import "../../scss/components/Navbar/_NavBar.scss";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import { Categorias } from "../Categorias/Categorias";
import { useState } from "react";

export const NavBar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <header className="header">
      <div className="header__div">
        <img
          className="header__div--presentacion"
          src="/img/presentacion.png"
          alt="bigotes gato"
        />
      </div>
      <div className="header__nav">
        <div className="header__nav--div">
          <img
            className="header__nav--div__logo"
            src="/img/logo.png"
            alt="logo"
          />
          <Link to={`/`}>
            <h1 className="header__nav--div__h1">Michi Shop</h1>
          </Link>
        </div>
        <nav className="header__nav--menu">
          <ul className="header__nav--menu__ul">
            <NavLink to={`/`} className="header__nav--menu__ul--li inicio">
              Inicio
            </NavLink>
            <NavLink
              to={`/nosotros`}
              className="header__nav--menu__ul--li nosotros"
            >
              Nosotros
            </NavLink>
            <button
              className={`header__nav--menu__ul--li productos ${
                showSubmenu ? "active" : ""
              }`}
              onClick={handleSubmenu}
            >
              Productos
              {showSubmenu && <Categorias />}
            </button>
            <NavLink
              to={`/contacto`}
              className="header__nav--menu__ul--li contacto"
            >
              Contacto
            </NavLink>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};
