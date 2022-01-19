import { Link } from "react-router-dom";

/* HOOKS */
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

/* STYLES AND IMAGES */
import "./Navbar.css";
import TempleLogo from "../assets/temple.svg";

const Navbar = () => {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="navbar">
      <ul>
        {!user && (
          <>
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
          </>
        )}
        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                Logging out...
              </button>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
