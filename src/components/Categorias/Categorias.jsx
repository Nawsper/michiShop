import { NavLink } from "react-router-dom";
import "../../scss/components/Categorias/_Categorias.scss";

export const Categorias = () => {
  return (
    <ul className="categorias">
      <div className="categorias__div todos">
        <NavLink className="categorias__div--navlink" to={`/`}>
          Todos
        </NavLink>
      </div>
      <div className="categorias__div alimentos">
        <NavLink
          className="categorias__div--navlink"
          to={`/category/alimentos`}
        >
          Alimentos
        </NavLink>
      </div>
      <div className="categorias__div juguetes">
        <NavLink className="categorias__div--navlink" to={`/category/juguetes`}>
          Juguetes
        </NavLink>
      </div>
      <div className="categorias__div descanso">
        <NavLink className="categorias__div--navlink" to={`/category/descanso`}>
          Descanso
        </NavLink>
      </div>
      <div className="categorias__div vestimenta">
        <NavLink
          className="categorias__div--navlink"
          to={`/category/vestimenta`}
        >
          Vestimenta
        </NavLink>
      </div>
    </ul>
  );
};
