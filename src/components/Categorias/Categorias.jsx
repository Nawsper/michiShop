import { NavLink } from "react-router-dom";
import "../../scss/components/Categorias/_Categorias.scss";

export const Categorias = () => {
  return (
    <ul className="categorias">
      <NavLink className="categorias__navlink todos" to={`/productos`}>
        <div className="categorias__navlink--div">Todos</div>
      </NavLink>
      <NavLink
        className="categorias__navlink  alimentos"
        to={`/category/alimentos`}
      >
        <div className="categorias__navlink--div">Alimentos</div>
      </NavLink>
      <NavLink
        className="categorias__navlink  juguetes"
        to={`/category/juguetes`}
      >
        <div className="categorias__navlink--div">Juguetes</div>
      </NavLink>
      <NavLink
        className="categorias__navlink  descanso"
        to={`/category/descanso`}
      >
        <div className="categorias__navlink--div">Descanso</div>
      </NavLink>
      <NavLink
        className="categorias__navlink vestimenta"
        to={`/category/vestimenta`}
      >
        <div className="categorias__navlink--div">Vestimenta</div>
      </NavLink>
    </ul>
  );
};
