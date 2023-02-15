import React from "react";
import logo from "../assets/Home/logo.svg";

const NavBar = () => {
  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand p-2" href="#">
          <img src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
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
                <a className="nav-link active" aria-current="page" href="#">
                  <img src={logo} />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Our Approach
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Careers
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Our Team
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
