import React, { Fragment } from "react";
import "../styles/Products.css";
import NavBar from "./NavBar";
import { FaArrowRight } from "react-icons/fa";
import ozcare from "../assets/Home/oz-care.png";
import desktop from "../assets/Home/desktop-3d.png";
import nextbreakout from "../assets/Home/next-breakout.png";
import Footer from "./Footer";

const Products = () => {
  return (
    <Fragment>
      <NavBar />
      <section className="bannerprod-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
              <h2 className="txt-2 pb-3">
                Reimagining
                <br />
                Advanced Innovations
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="tab-sec pb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              {/* <!-- Nav Tabs --> */}
              <div className="tab-main">
                <div className="wrap-tab">
                  <nav>
                    <div
                      className="nav nav-tabs nav-justified px-5"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="nav-menu1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu1"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu1"
                        aria-selected="true"
                      >
                        <p className="body-sm">Product Engineering</p>
                      </button>
                      <button
                        className="nav-link"
                        id="nav-menu2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu2"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu2"
                        aria-selected="false"
                      >
                        <p className="body-sm">Product Design</p>
                      </button>
                      <button
                        className="nav-link"
                        id="nav-menu3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu3"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu3"
                        aria-selected="false"
                      >
                        <p className="body-sm">Innovations</p>
                      </button>
                      <button
                        className="nav-link"
                        id="nav-menu4-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu4"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu4"
                        aria-selected="false"
                      >
                        <p className="body-sm">Manufacturing Solutions</p>
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="container tab-pane fade show active"
                  id="nav-menu1"
                  role="tabpanel"
                  aria-labelledby="nav-menu1-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                      <div className="card mt-5">
                        <img className="card-img-top" src={ozcare} />
                        <div className="card-body">
                          <p className="txt-3-bold">OZ Care</p>
                          <p className="body-bold py-2">
                            oz care provides custom solution for sterlization
                            and real time decontamination in remote and area
                            specified applications like hospital.
                          </p>
                          <div className="banner-links">
                            <a href="/aboutus" className="btn-style-2">
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={desktop} />
                        <div className="card-body">
                          <p className="txt-3-bold">
                            Desktop 3D printing system
                          </p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a href="/aboutus" className="btn-style-2">
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={desktop} />
                        <div className="card-body">
                          <p className="txt-3-bold">
                            Desktop 3D printing system
                          </p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a href="/aboutus" className="btn-style-2">
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 pb-5 negative-sec">
                      <div className="card mt-5">
                        <img className="card-img-top" src={desktop} />
                        <div className="card-body">
                          <p className="txt-3-bold">
                            Desktop 3D printing system
                          </p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a href="/aboutus" className="btn-style-2">
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={ozcare} />
                        <div className="card-body">
                          <p className="txt-3-bold">OZ Care</p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a href="/aboutus" className="btn-style-2">
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={ozcare} />
                        <div className="card-body">
                          <p className="txt-3-bold">OZ Care</p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a href="/aboutus" className="btn-style-2">
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="container tab-pane fade"
                  id="nav-menu2"
                  role="tabpanel"
                  aria-labelledby="nav-menu2-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                      <div className="card mt-5">
                        <img className="card-img-top" src={nextbreakout} />
                        <div className="card-body">
                          <p className="txt-3-bold">OZ Care</p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a href="/aboutus" className="btn-style-2">
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={desktop} />
                        <div className="card-body">
                          <p className="txt-3-bold">
                            Desktop 3D printing system
                          </p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a href="#" className="btn-style-2">
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={desktop} />
                        <div className="card-body">
                          <p className="txt-3-bold">
                            Desktop 3D printing system
                          </p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a href="/aboutus" className="btn-style-2">
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 pb-5 negative-sec">
                      <div className="card mt-5">
                        <img className="card-img-top" src={desktop} />
                        <div className="card-body">
                          <p className="txt-3-bold">
                            Desktop 3D printing system
                          </p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a
                              href="http://gimsindustry.com/our=approach.html"
                              className="btn-style-2"
                            >
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={ozcare} />
                        <div className="card-body">
                          <p className="txt-3-bold">OZ Care</p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a href="/aboutus" className="btn-style-2">
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={ozcare} />
                        <div className="card-body">
                          <p className="txt-3-bold">OZ Care</p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a href="/aboutus" className="btn-style-2">
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="container tab-pane fade"
                  id="nav-menu3"
                  role="tabpanel"
                  aria-labelledby="nav-menu3-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                      <div className="card mt-5">
                        <img className="card-img-top" src={ozcare} />
                        <div className="card-body">
                          <p className="txt-3-bold">OZ Care</p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a
                              href="http://gimsindustry.com/our-approach.html"
                              className="btn-style-2"
                            >
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={desktop} />
                        <div className="card-body">
                          <p className="txt-3-bold">
                            Desktop 3D printing system
                          </p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a
                              href="http://gimsindustry.com/our-approach.html"
                              className="btn-style-2"
                            >
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={desktop} />
                        <div className="card-body">
                          <p className="txt-3-bold">
                            Desktop 3D printing system
                          </p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a
                              href="http://gimsindustry.com/our-approach.html"
                              className="btn-style-2"
                            >
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 pb-5 negative-sec">
                      <div className="card mt-5">
                        <img className="card-img-top" src={desktop} />
                        <div className="card-body">
                          <p className="txt-3-bold">
                            Desktop 3D printing system
                          </p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a
                              href="http://gimsindustry.com/our-approach.html"
                              className="btn-style-2"
                            >
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={ozcare} />
                        <div className="card-body">
                          <p className="txt-3-bold">OZ Care</p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a
                              href="http://gimsindustry.com/our-approach.htmhttp://gimsindustry.com/our_approach.html"
                              className="btn-style-2"
                            >
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={ozcare} />
                        <div className="card-body">
                          <p className="txt-3-bold">OZ Care</p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a
                              href="http://gimsindustry.com/our-approach.html"
                              className="btn-style-2"
                            >
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="container tab-pane fade"
                  id="nav-menu4"
                  role="tabpanel"
                  aria-labelledby="nav-menu4-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                      <div className="card mt-5">
                        <img className="card-img-top" src={ozcare} />
                        <div className="card-body">
                          <p className="txt-3-bold">OZ Care</p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a
                              href="http://gimsindustry.com/our-approach.html"
                              className="btn-style-2"
                            >
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={desktop} />
                        <div className="card-body">
                          <p className="txt-3-bold">
                            Desktop 3D printing system
                          </p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a
                              href="http://gimsindustry.com/our-approach.html"
                              className="btn-style-2"
                            >
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={desktop} />
                        <div className="card-body">
                          <p className="txt-3-bold">
                            Desktop 3D printing system
                          </p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a
                              href="http://gimsindustry.com/our-approach.html"
                              className="btn-style-2"
                            >
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 pb-5 negative-sec">
                      <div className="card mt-5">
                        <img className="card-img-top" src={desktop} />
                        <div className="card-body">
                          <p className="txt-3-bold">
                            Desktop 3D printing system
                          </p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a
                              href="http://gimsindustry.com/our-approach.html"
                              className="btn-style-2"
                            >
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={ozcare} />
                        <div className="card-body">
                          <p className="txt-3-bold">OZ Care</p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a
                              href="http://gimsindustry.com/our-approach.htmhttp://gimsindustry.com/our_approach.html"
                              className="btn-style-2"
                            >
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <img className="card-img-top" src={ozcare} />
                        <div className="card-body">
                          <p className="txt-3-bold">OZ Care</p>
                          <p className="body-bold py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse lacus ipsum, tincidunt eget varius
                            nec, tincidunt ac ipsum. Nam sollicitudin gravida
                            bibendum.
                          </p>
                          <div className="banner-links">
                            <a
                              href="http://gimsindustry.com/our-approach.html"
                              className="btn-style-2"
                            >
                              Learn More <FaArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Products;
