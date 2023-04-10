import React, { useContext } from "react";
import logo from "../assets/Home/logo.svg";
import { FaUserAlt } from "react-icons/fa";
import { Usercontext } from "../utils/Context";
import Cookies from "universal-cookie";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { auth, setRole } = useContext(Usercontext);
  const cookies = new Cookies();
  const navigate = useNavigate();

  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand p-2" href="/">
          <img src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          {auth && auth.user ? (
            <span>
              <FaUserAlt />
            </span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <img src={logo} />
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {auth && auth.user && (
                  <li className="nav-item">
                  <Link
                    className="nav-link text-light active"
                    aria-current="page"
                    to="/admin"
                  >
                    Admin Page
                  </Link>
                </li>
                )}

              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/aboutus"
                >
                  Our Approach
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/careers"
                >
                  Careers
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/team"
                >
                  Our Team
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/contactus"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                {!auth && !auth && (
                  <Link
                    className="nav-link text-light"
                    aria-current="page"
                    to="/login"
                  >
                    Employee Login
                  </Link>
                )}
              </li>
            </ul>
            {auth && auth.user && (
                  <button
                    className="btn text-light"
                    onClick={() => {
                      cookies.remove("auth");
                      navigate("/");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </button>
                )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
