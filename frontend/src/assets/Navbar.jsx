import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation(); // Get current path

  return (
    <div id="navbar">
      <div id="navbarLeft">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={location.pathname === "/about" ? "active" : ""} to="/about">About</Link>
        <Link className={location.pathname === "/chat" ? "active" : ""} to="/chat">Chat</Link>
      </div>

      <div id="navbarRight">
        <Link className={location.pathname === "/signin" ? "active" : ""} to="/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default Navbar;
