import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/Login");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking on overlay
  const closeMenuOnOverlay = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="nav-container">
      <div className="logo">
        <h2>Nomi</h2>
      </div>
      
      {/* Hidden checkbox to control menu state */}
      <input 
        type="checkbox" 
        id="menu-toggle" 
        checked={isMenuOpen} 
        onChange={() => setIsMenuOpen(!isMenuOpen)}
        style={{display: 'none'}}
      />
      
      {/* Toggle button label */}
      <label htmlFor="menu-toggle" className="menu-toggle-label" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </label>
      
      {/* Overlay for closing menu by clicking outside */}
      {isMenuOpen && (
        <div 
          className="menu-overlay"
          onClick={closeMenuOnOverlay}
        />
      )}
      
      {/* Navigation menu */}
      <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
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