import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo2 from "../images/logo2.png";

const Navbar = () => {
  const [displayUsername, setDisplayUsername] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const usenavigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setIsMenuOpen(false);
    } else {
      let username = sessionStorage.getItem("username");
      if (username === "" || username === null) {
        usenavigate("/login");
      } else {
        setDisplayUsername(username);
        setIsMenuOpen(true);
      }
    }
  }, [location, usenavigate]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to={"/"}>
            <img src={logo2} alt="Logo" className="me-2 img-fluid" style={{ maxHeight: "50px" }} />
          </Link>
          <button
            className={`navbar-toggler ${isMenuOpen ? "open" : ""}`}
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <Link
                  className="nav-link fw-medium"
                  to={"/"}
                  onClick={handleMenuItemClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-medium"
                  to={"/listing"}
                  onClick={handleMenuItemClick}
                >
                  ListingItem
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center fs-5">
              <span className="navbar-text me-3 fw-medium">
                Welcome <b>{displayUsername}</b>
              </span>
              <Link
                className="btn btn-outline-dark fw-bold"
                to={"/login"}
                onClick={handleMenuItemClick}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;