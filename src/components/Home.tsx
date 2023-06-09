import React, { Fragment } from "react";
import latesttech from "../assets/Home/latest-tech.svg";
import protection from "../assets/Home/protection.svg";
import manufacturing from "../assets/Home/manufacturing.svg";
import global from "../assets/Home/global-scalability.svg";
import "../styles/Home.css";
import { FaArrowRight } from "react-icons/fa";
import NavBar from "./NavBar";
import ozcare from "../assets/Home/oz-care.png";
import desktop from "../assets/Home/desktop-3d.png";
import apple from "../assets/Home/apple.jpg";
import Footer from "./Footer";
import { Product } from "../utils";
import Gallery from "./Gallery";
const Home = () => {
  const [data, setData] = React.useState<Product[]>([]);

  React.useEffect(() => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "/product",
    };

    axios(config)
      .then(function (response: any) {
        let fltrdata = response.data.filter((product: any) => {
          return product.presentinhomepage;
        });

        setData(fltrdata);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <section className="banner-sec">
        <div className="container">
          <div className="row align-items-center ">
            <div className=" col-xl-6 col-lg-12 col-md-12 col-12 text-light">
              <h1 className="txt-1">
                Guhan Industrial and <br />
                Manufacturing Solutions
              </h1>
              <h3 className="txt-3 py-3">
                We are a Product Engineering and Licensing company.
                <br />
              </h3>
              <h3 className="align-items-center">
                <i className="fw-bold">
                  <blockquote>Engineered by the laws of Physics. </blockquote>
                </i>
              </h3>
              <div className="banner-links py-3">
                <a href="/products">
                  <button type="button" className="btn btn-primary">
                    Explore Products <FaArrowRight />
                  </button>
                </a>
                <a href="/aboutus">
                  <button
                    type="button"
                    className="btn btn-outline-primary text-light"
                  >
                    About Us <FaArrowRight />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Ends -->

        <!-- Product sec --> */}
      <section className="product-sec pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12 col-12 pb-5">
              <h2 className="txt-2">
                Our products instantly
                <br />
                attracts customers
                <br />
                for success
              </h2>
              <hr className="bdr-btm" />
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <div className="row align-items-center">
                <div className="productBox col-xl-6 col-lg-6 col-md-6 col-12 pb-5">
                  <img src={latesttech} loading="lazy" />
                  <p className="body-semi pt-4 pb-2">Latest Tech</p>
                  <p className="body-sm">
                    GIMS Develops latest and advanced technology
                  </p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12 pb-5">
                  <img src={protection} loading="lazy" />
                  <p className="body-semi pt-4 pb-2">Protection</p>
                  <p className="body-sm">
                    GIMS Secures Strong design and patent protection
                  </p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12 pb-5">
                  <img src={manufacturing} loading="lazy" />
                  <p className="body-semi pt-4 pb-2">Manufacturing</p>
                  <p className="body-sm">
                    GIMS Products can be manufactured in a wide range of markets
                    at competitive Prices
                  </p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12 pb-5">
                  <img src={global} loading="lazy" />
                  <p className="body-semi pt-4 pb-2">Global Scalability</p>
                  <p className="body-sm">
                    GIMS helps companies to scale up globally by taking the risk
                    out of designing and R&D
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry section */}

      <section className="industry-sec pt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12 col-12 pb-5">
              <h2 className="txt-2">
                Our Industrial and
                <br />
                Manufacturing solutions
              </h2>
              <hr className="bdr-btm" />
              {data
                .filter((_, ind) => {
                  return ind % 2 === 0;
                })
                .map((product) => {
                  return (
                    <div className="card mt-5">
                      <img
                        className="card-img-top"
                        src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                      />
                      <div className="card-body">
                        <p className="txt-3-bold">{product.name}</p>
                        <p className="body-bold py-2">
                          {product.description.split("###")[0]}
                        </p>
                        <div className="banner-links">
                          <a
                            href="https://gimsindia.in/products"
                            className="btn-style-2"
                          >
                            Learn More{" "}
                            <FaArrowRight className="text-primary mx-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12 negative-card">
              {data
                .filter((_, ind) => {
                  return ind % 2 != 0;
                })
                .map((product) => {
                  return (
                    <div className="card mt-5">
                      <img
                        className="card-img-top"
                        src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                      />
                      <div className="card-body">
                        <p className="txt-3-bold">{product.name}</p>
                        <p className="body-bold py-2">
                          {product.description.split("###")[0]}
                        </p>
                        <div className="banner-links">
                          <a
                            href="https://gimsindia.in/products"
                            className="btn-style-2"
                          >
                            Learn More{" "}
                            <FaArrowRight className="text-primary mx-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div className="banner-links py-3">
                <a href="/products">
                  <button type="button" className="btn btn-primary">
                    Explore All Products <FaArrowRight className="ms-2" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Gallery />
      <Footer />
    </Fragment>
  );
};

export default Home;
