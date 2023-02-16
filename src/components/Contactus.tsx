import React, { Fragment } from "react";
import NavBar from "./NavBar";
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import "../styles/Contactus.css";
import Footer from "./Footer";

const Contactus = () => {
  return (
    <Fragment>
      <NavBar />
      <section className="banner-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-12 col-md-12 col-12 text-light"></div>
          </div>
        </div>
      </section>
      <section className="main-form py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
              <h2 className="txt-2 pb-3">Contact Us</h2>
              <p className="txt-mdm">We'd love to hear from you!</p>
              <hr className="bdr-btm-2" />
            </div>
            <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-12 pt-4">
              <div className="contact-form contact-page-form parsley-validate">
                <form id="contactForm" action="#">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 text-center">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control body-bold m-3"
                          placeholder="First name"
                          name="Fname"
                          id="Fname"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control body-bold m-3"
                          placeholder="Last name"
                          name="Lname"
                          id="Lname"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 text-center">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control body-bold m-3"
                          placeholder="Email Address"
                          name="email"
                          id="email"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="phone"
                          type="tel"
                          className="form-control body-bold m-3"
                          placeholder="Phone Number"
                          id="phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
                      <div className="form-group">
                        <textarea
                          className="form-control body-bold m-3"
                          placeholder="Type your message here..."
                          rows={5}
                          name="message"
                          id="comment"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="banner-links">
                    <button
                      type="submit"
                      className="btn-style btn-1"
                      id="Btn_one"
                    >
                      Submit <FaArrowRight />
                    </button>
                  </div>
                  <div className="">
                    <div
                      id="status"
                      style={{
                        padding: "20px",
                        color: "green",
                        fontWeight: 600,
                      }}
                    ></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="interest-sec py-5">
    	<div className="container">
    		<div className="row align-items-center">
    			<div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
    				<h2 className="txt-2">Interested in what we do?</h2>
    				<p className="body-bold-2 pt-3 pb-4">You can be a part of our amazing journey<br />by becoming an investor and collaborator</p>
    				<div className="banner-links pt-2">
	    				<a href="#" className="btn-style btn-3">Inverstor</a> <a href="#" className="btn-style btn-3">Collaborator</a>
	    			</div>
    			</div>
    		</div>
    	</div>
    </section>

    <section id="Info-sec" className="contact-info py-5">
    	<div className="container">
    		<div className="row">
    			<div className="col-xl-4 col-lg-4 col-md-12 col-12 text-lg-left text-center">
          <FaEnvelope className="text-danger display-6" />
					<p className="body-bold-2 py-3"><a href="mailto:Support@guhan.in" className="body-bold-2">Support@guhan.in</a></p>
    			</div>
    			<div className="col-xl-4 col-lg-4 col-md-12 col-12 text-lg-center text-center">
          <FaMapMarkerAlt className="text-warning display-6" />
					<p className="body-bold-2 py-3">158, G Block, 1st Main Rood,<br />
												   Anna Nagar, Chennai, Tamil<br /> 
												   Nadu, Post Code, 600102</p>
    			</div>
    			<div className="col-xl-4 col-lg-4 col-md-12 col-12 text-lg-right text-center">
          <FaWhatsapp className="text-success display-6" />
					<p className="body-bold-2 pt-3"><a href="tel:044 26633516" className="body-bold-2">044 26633516</a> </p>
 					<p className="body-bold-2">We're there on WhatsApp too</p>
    			</div>
    			
    		</div>
    	</div>
    </section>
    <Footer />
    </Fragment>
  );
};

export default Contactus;
