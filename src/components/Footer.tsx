import React, { Fragment } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/Home/logo.svg";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer-sec pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <a className="container-logo" href="#">
                <img src={logo} loading="lazy" />
              </a>
              <p className="py-4">
                Product Design, Manufacturing, R&D
                <br />
                and Automation
              </p>
              <div className="social-sec">
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-7 links">
              <h2 className="">Home</h2>
              <a href="https://gimsindia.in/aboutus">Why choose us?</a>
              <a href="https://gimsindia.in/services">Our Services</a>
              <a href="https://gimsindia.in/products">Our Products</a>
              <a href="https://gimsindia.in/team">Our Team</a>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-12 links">
              <h2 className="">Help</h2>
              <a href="https://gimsindia.in/contactus">Contact Us</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
        <div className="copyright mt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <h5>© All right reserved GIMS 2022</h5>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
