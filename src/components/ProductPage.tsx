import React, { Fragment, useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import "../styles/ProductPage.css";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import bgImg from "../assets/Home/section3.png";
import { Product, faq, image } from "../utils";

const ProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<Product>();
  const [des, setDes] = useState<String[]>();
  const [faq, setFaq] = useState<faq[]>();
  const [imgs, setImages] = useState<image[]>();

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `http://localhost:8000/product/${id}`,
      headers: {},
    };

    axios(config)
      .then(function (response: any) {
        setData(response.data[0]);
        setDes(response.data[0].description.split("###"));
      })
      .catch(function (error: any) {
        console.log(error);
      });

    var config2 = {
      method: "get",
      url: `http://localhost:8000/faq/${id}`,
      headers: {},
    };

    axios(config2)
      .then(function (response: any) {
        setFaq(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });

    var config3 = {
      method: "get",
      url: `http://localhost:8000/image/${id}`,
      headers: {},
    };

    axios(config3)
      .then(function (response: any) {
        setImages(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <section
        className="bannerprodpage-sec"
        style={{ backgroundImage: "url(assets/img/waterjet/banner2x.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-12 col-md-12 col-12 text-light">
              <h1 className="txt-1">
                {data?.name?.split(" ").map((name) => {
                  return (
                    <Fragment>
                      {name} <br />
                    </Fragment>
                  );
                })}
              </h1>
              <div className="banner-links pt-5">
                <a
                  href={`http://localhost:8000/products/${data?.brochure}`}
                  target={"_blank"}
                  className="btn-style btn-1"
                >
                  Download Brochure <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-sec pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 pt-3 pb-5">
              <h2 className="txt-2">{data?.name}</h2>
            </div>

            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              {des &&
                des[0].split("\n").map((paragraph: any) => {
                  return (
                    <Fragment>
                      <p className="body-sm">{paragraph}</p>
                      <br />
                    </Fragment>
                  );
                })}
              <a href="#Gallery" className="btn-style btn-1-1">
                View Gallery
              </a>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12 mt-md-0 mt-5">
              <iframe
                width="100%"
                height="350"
                src={`https://www.youtube.com/embed/FXk76rWYdEs`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <br />
              <br />
              {imgs && imgs.length > 0 && (
                <img
                  className="card-img-top"
                  src={
                    imgs && imgs?.length > 0
                      ? `http://localhost:8000/products/${imgs[0].location}`
                      : "...."
                  }
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="productPagebg">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center pt-3 px-0"></div>
          </div>
        </div>
      </section>
      {imgs && imgs.length > 1 && (
        <section
          className="clients py-5"
          id="Gallery"
          style={{ background: "#E8E8E8" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12 pt-2 pb-2 text-center">
                <h2 className="txt-2">Product Gallery</h2>
                <hr className="bdr-btm mx-auto" />
              </div>
              <div className="col-md-6">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="true"
                >
                  <div className="carousel-indicators">
                    {imgs?.slice(1).map((img: any, ind: any) => (
                      <Fragment>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={ind}
                          className={ind == 0 ? "active" : ""}
                          aria-current={ind == 0 ? "true" : "false"}
                          aria-label={`Slide ${ind + 1}`}
                        />
                      </Fragment>
                    ))}
                  </div>
                  <div className="carousel-inner">
                    {imgs?.slice(1).map((img: any, ind: any) => (
                      <Fragment>
                        <div
                          className={
                            ind == 0 ? "carousel-item active" : "carousel-item"
                          }
                        >
                          <img
                            src={`http://localhost:8000/products/${img.location}`}
                            className="mx-auto d-block w-100"
                            alt="..."
                          />
                        </div>
                      </Fragment>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {des && des?.length > 1 && (
        <section className="specs-sec pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12 pt-3 pb-3 text-center">
                <h2 className="txt-2">Specifications</h2>
                <hr className="bdr-btm mx-auto" />
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-12 pt-3 pb-5">
                <table width="100%" className="table">
                  <tbody>
                    {des &&
                      des.slice(1).map(
                        (spec) =>
                          spec && (
                            <tr>
                              <td align="left">{spec.split(":")[0]}</td>
                              <td align="right">{spec.split(":")[1]}</td>
                            </tr>
                          )
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
      {faq && faq.length > 0 && (
        <section className="faq-sec">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12 pt-3 pb-3 text-center">
                <h2 className="txt-2 tex">FAQ</h2>
                <hr className="bdr-btm mx-auto" />
              </div>
              {faq.map((faq, ind) => (
                <div className="col-xl-4 col-lg-12 col-md-12 col-12 pt-3 pb-5">
                  <div
                    className="card text-center"
                    style={{ width: "18rem" }}
                    key={faq.id}
                  >
                    <div className="card-body">
                      <h4 className="card-title text-primary">{faq.question}</h4>
                      <hr className="bdr-btm mx-auto" />
                      <p className="card-text">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default ProductPage;
