import React, { useContext } from "react";
import logo from "../assets/Home/logo.svg";
import { FaUserAlt } from "react-icons/fa";
import { Usercontext } from "../utils/Context";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

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
                <a
                  className="nav-link text-light active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              {auth && auth.user && (
                  <li className="nav-item">
                  <a
                    className="nav-link text-light active"
                    aria-current="page"
                    href="/admin"
                  >
                    Admin Page
                  </a>
                </li>
                )}

              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  aria-current="page"
                  href="/aboutus"
                >
                  Our Approach
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  aria-current="page"
                  href="/services"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  aria-current="page"
                  href="/products"
                >
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  aria-current="page"
                  href="/careers"
                >
                  Careers
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  aria-current="page"
                  href="/team"
                >
                  Our Team
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  aria-current="page"
                  href="/contactus"
                >
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                {!auth && !auth && (
                  <a
                    className="nav-link text-light"
                    aria-current="page"
                    href="/login"
                  >
                    Employee Login
                  </a>
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
