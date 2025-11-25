import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header({ theme = "light", onToggleTheme = () => {} }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/" className="brand-link" onClick={closeMenu}>
            
          </Link>
        </div>

        {/* Hamburger button (mobile) */}
        <button
          className="hamburger"
          aria-label="Toggle navigation"
          onClick={handleToggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/projects" className="nav-link" onClick={closeMenu}>
            Projects
          </NavLink>

          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </nav>
    </header>
  );
}
