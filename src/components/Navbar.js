import { Link } from "react-router-dom";

/* STYLES AND IMAGES */
import "./Navbar.css";
import TempleLogo from "../assets/temple.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={TempleLogo} alt="temple logo" />
          <span>
            <Link to="/">Task Binder</Link>
          </span>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
