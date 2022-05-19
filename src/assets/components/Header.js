import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="border">
      <div className="d-flex container align-items-center">
        <h1>ImmoLo</h1>
        <nav className="navigation">
          <ul className="d-flex">
            <li className="px-1">
              <NavLink exact to="/" activeClassname="navActive">
                <i className="fas fa-home me-1"></i>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="px-1">
              <NavLink exact to="/users" activeClassname="navActive">
                <i className="fas fa-mountain me-1"></i>
                <span>Users</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
