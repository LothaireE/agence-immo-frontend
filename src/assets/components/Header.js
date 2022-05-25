import "../CSS/Header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header-bar d-flex">
      <div className="d-flex justify-content-between container align-items-center text-light">
        <h2 className="pe-3">Immo-Lo</h2>
        <nav className="navigation d-flex">
          <NavLink className="px-2 text-light" exact="true" to="/">
            <FontAwesomeIcon icon="house-user" className="pe-1" />
            <span>Accueil</span>
          </NavLink>
          <NavLink className="px-2 text-light" exact="true" to="/users">
            <FontAwesomeIcon icon="users" className="me-1" />
            <span>Utilisateurs</span>
          </NavLink>
          <NavLink className="px-2 text-light" exact="true" to="/realties">
            <FontAwesomeIcon icon="book-atlas" className="me-1" />
            <span>Biens</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
