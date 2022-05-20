import "../CSS/Header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header-bar border ">
      <div className="d-flex container align-items-center text-light">
        <h2 className="pe-3">Immo-Lo</h2>
        <nav className="navigation d-flex">
          <NavLink
            className="px-2 text-light"
            exact
            to="/"
            activeClassname="navActive"
          >
            <FontAwesomeIcon icon="house-user" className="pe-1" />
            <span>Home</span>
          </NavLink>

          <NavLink
            className="px-2 text-light"
            exact
            to="/users"
            activeClassname="navActive"
          >
            {/* <i className="fas fa-mountain me-1"></i> */}
            <FontAwesomeIcon icon="users" className="me-1" />
            <span>Users</span>
          </NavLink>
          <NavLink
            className="px-2 text-light"
            exact
            to="/realties"
            activeClassname="navActive"
          >
            <FontAwesomeIcon icon="book-atlas" className="me-1" />
            <span>Realties</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
