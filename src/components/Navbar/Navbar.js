import { NavLink } from "react-router-dom";

/* HOOKS */
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

/* STYLES AND IMAGES */
import "./Navbar.css";
import TempleLogo from "../../assets/temple.svg";

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
                <NavLink to="/">Task Binder</NavLink>
              </span>
            </li>

            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
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
