import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/Login");
    // Close menu when logging out
    document.getElementById("menu-toggle").checked = false;
  };

  // Close menu when clicking on links
  const closeMenu = () => {
    document.getElementById("menu-toggle").checked = false;
  };

  // Close menu when clicking on overlay
  const closeMenuOnOverlay = () => {
    document.getElementById("menu-toggle").checked = false;
  };

  return (
    <div className="nav-container">
      <div className="logo">
        <h2>Nomi</h2>
      </div>
      
      {/* Hidden checkbox to control menu state */}
      <input type="checkbox" id="menu-toggle" />
      
      {/* Toggle button label */}
      <label htmlFor="menu-toggle" className="menu-toggle-label">
        ☰
      </label>
      
      {/* Overlay for closing menu by clicking outside */}
      <label 
        htmlFor="menu-toggle" 
        className="menu-overlay"
        onClick={closeMenuOnOverlay}
      />
      
      {/* Navigation menu */}
      <div className="menu">
        <ul className="drop-down">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Logout button */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;