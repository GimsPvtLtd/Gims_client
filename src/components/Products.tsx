import React, { Fragment } from "react";
import "../styles/Products.css";
import NavBar from "./NavBar";
import { FaArrowRight } from "react-icons/fa";
import ozcare from "../assets/Home/oz-care.png";
import desktop from "../assets/Home/desktop-3d.png";
import nextbreakout from "../assets/Home/next-breakout.png";
import Footer from "./Footer";
import { Product } from "../utils";


const Products = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "/product",
    };

    axios(config)
      .then(function (response: any) {
        setData(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  const pe = data.filter((product: Product) => {
    if (product.type === "Product Engineering") {
      return true;
    }
    return false;
  });

  const pd = data.filter((product: Product) => {
    if (product.type === "Product Design") {
      return true;
    }
    return false;
  });

  const inv = data.filter((product: Product) => {
    if (product.type === "Innovations") {
      return true;
    }
    return false;
  });

  const manufact = data.filter((product: Product) => {
    if (product.type === "Manufacturing Solutions") {
      return true;
    }
    return false;
  });

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

      <section className="tab-sec pb-5 prod-sec">
        <div className="row">
          <div className="row align-items-center">
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
                  className="tab-pane fade show active product-row"
                  id="nav-menu1"
                  role="tabpanel"
                  aria-labelledby="nav-menu1-tab"
                  tabIndex={0}
                >
                  <div className="container">
                  <div className="row justify-content-center pb-5">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                      {pe
                        .filter((_, ind) => {
                          if (ind % 2 == 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                            <div className="card mt-5" key={product.id}>
                              <img
                                className="card-img-top"
                                src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                              />
                              <div className="card-body">
                                <p className="txt-3-bold">{product.name}</p>
                                <p className="body-bold py-2 product-descrip">
                                  {product.description}
                                </p>
                                <div className="banner-links">
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 pb-5 negative-sec">
                      {pe
                        .filter((_, ind) => {
                          if (ind % 2 != 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                            <div className="card mt-5" key={product.id}>
                              <img
                                className="card-img-top"
                                src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                              />
                              <div className="card-body">
                                <p className="txt-3-bold">{product.name}</p>
                                <p className="body-bold py-2 product-descrip">
                                  {product.description}
                                </p>
                                <div className="banner-links">
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
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
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 pb-5">
                      {pd
                        .filter((_, ind) => {
                          if (ind % 2 == 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                            <div className="card mt-5" key={product.id}>
                              <img
                                className="card-img-top"
                                src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                              />
                              <div className="card-body">
                                <p className="txt-3-bold">{product.name}</p>
                                <p className="body-bold py-2 product-descrip">
                                  {product.description}
                                </p>
                                <div className="banner-links">
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 pb-5 negative-sec">
                    {pd
                        .filter((_, ind) => {
                          if (ind % 2 != 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                            <div className="card mt-5">
                              <img
                                className="card-img-top"
                                src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                              />
                              <div className="card-body">
                                <p className="txt-3-bold">{product.name}</p>
                                <p className="body-bold py-2 product-descrip">
                                  {product.description}
                                </p>
                                <div className="banner-links">
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
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
                    {inv
                        .filter((_, ind) => {
                          if (ind % 2 == 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                            <div className="card mt-5">
                              <img
                                className="card-img-top"
                                src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                              />
                              <div className="card-body">
                                <p className="txt-3-bold">{product.name}</p>
                                <p className="body-bold py-2 product-descrip">
                                  {product.description}
                                </p>
                                <div className="banner-links">
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 pb-5 negative-sec">
                    {inv
                        .filter((_, ind) => {
                          if (ind % 2 != 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                            <div className="card mt-5">
                              <img
                                className="card-img-top"
                                src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                              />
                              <div className="card-body">
                                <p className="txt-3-bold">{product.name}</p>
                                <p className="body-bold py-2 product-descrip">
                                  {product.description}
                                </p>
                                <div className="banner-links">
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
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
                    {manufact
                        .filter((_, ind) => {
                          if (ind % 2 == 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                            <div className="card mt-5">
                              <img
                                className="card-img-top"
                                src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                              />
                              <div className="card-body">
                                <p className="txt-3-bold">{product.name}</p>
                                <p className="body-bold py-2 product-descrip">
                                  {product.description}
                                </p>
                                <div className="banner-links">
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 pb-5 negative-sec">
                    {manufact
                        .filter((_, ind) => {
                          if (ind % 2 != 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                            <div className="card mt-5">
                              <img
                                className="card-img-top"
                                src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                              />
                              <div className="card-body">
                                <p className="txt-3-bold">{product.name}</p>
                                <p className="body-bold py-2 product-descrip">
                                  {product.description}
                                </p>
                                <div className="banner-links">
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
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
