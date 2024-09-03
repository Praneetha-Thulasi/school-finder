// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-info">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Your Logo
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-light ms-2"
                onClick={() => navigate('/schoolist')}
              >
                Get Schools
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
