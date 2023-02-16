import React, { Fragment } from "react";
import NavBar from "./NavBar";
import "../styles/Services.css";
import dummy from "../assets/services/dummy.png";
import Footer from "./Footer";

const Services = () => {
  return (
    <Fragment>
      <NavBar />
      <section className="bannerser-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
              <h2 className="txt-2 pb-3">Services and support</h2>
              <p className="txt-3-dp">
                We provide world-class services and support
                <br />
                with our wide-spread expertise in various fields
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-sec pb-5 px-md-5 services-and-support">
        <div className="container-fluid">
          <div className="row">
            {/* <!-- R&D --> */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 pb-5">
              <h2 className="txt-2">R&D</h2>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 pb-5">
              <div className="card" data-toggle="modal" data-target="#myModal">
                <img className="card-img-top" src={dummy} />
                <div className="card-body">
                  <p className="txt-3-dp">Personalised Hot wire cutter</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 pb-5">
              <div className="card">
                <img className="card-img-top" src={dummy} />
                <div className="card-body">
                  <p className="txt-3-dp">Personalised Hot wire cutter</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 pb-5">
              <div className="card">
                <img className="card-img-top" src={dummy} />
                <div className="card-body">
                  <p className="txt-3-dp">Personalised Hot wire cutter</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 pb-5">
              <div className="card">
                <img className="card-img-top" src={dummy} />
                <div className="card-body">
                  <p className="txt-3-dp">Personalised Hot wire cutter</p>
                </div>
              </div>
            </div>

            {/* <!-- Manufacturing and automation --> */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 pb-5 pt-3">
              <h2 className="txt-2">Manufacturing and automation</h2>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 pb-5">
              <div className="card">
                <img className="card-img-top" src={dummy} />
                <div className="card-body">
                  <p className="txt-3-dp">Personalised Hot wire cutter</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 pb-5">
              <div className="card">
                <img className="card-img-top" src={dummy} />
                <div className="card-body">
                  <p className="txt-3-dp">Personalised Hot wire cutter</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 pb-5">
              <div className="card">
                <img className="card-img-top" src={dummy} />
                <div className="card-body">
                  <p className="txt-3-dp">Personalised Hot wire cutter</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 pb-5">
              <div className="card">
                <img className="card-img-top" src={dummy} />
                <div className="card-body">
                  <p className="txt-3-dp">Personalised Hot wire cutter</p>
                </div>
              </div>
            </div>

            {/* <!-- Design --> */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 pb-5 pt-3">
              <h2 className="txt-2">Design</h2>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 pb-5">
              <div className="card">
                <img className="card-img-top" src={dummy} />
                <div className="card-body">
                  <p className="txt-3-dp">Personalised Hot wire cutter</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 pb-5">
              <div className="card">
                <img className="card-img-top" src={dummy} />
                <div className="card-body">
                  <p className="txt-3-dp">Personalised Hot wire cutter</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 pb-5">
              <div className="card">
                <img className="card-img-top" src={dummy} />
                <div className="card-body">
                  <p className="txt-3-dp">Personalised Hot wire cutter</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 pb-5">
              <div className="card">
                <img className="card-img-top" src={dummy} />
                <div className="card-body">
                  <p className="txt-3-dp">Personalised Hot wire cutter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title txt-3-dp">
                Personalised Hot wire cutter
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <img
                className="card-img-top"
                src="assets/img/services/dummy.png"
              />
              <p className="txt-3-dp pt-3 pb-2">Description</p>
              <p className="body-bold">
                We are looking for a product designer who can be focussed and
                keen to work either in a team or alone. We are looking for a
                product designer who can be focussed and keen to work either in
                a team or alone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Indusrty sec Ends --> */}

      <section className="industry-sec pb-5 px-5">
        <div className="container">
          <div className="row">
            {/* <!-- R&D --> */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 pb-5">
              <h2 className="txt-3-dp">
                Have a project you think we could work our magic in?
              </h2>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 pb-5 text-center">
              <div className="banner-links pt-2">
                <a href="#" className="btn-style btn-3">
                  Submit requirements
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Services;
