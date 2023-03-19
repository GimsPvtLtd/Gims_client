import React, { Fragment, useEffect, useState } from "react";
import "../styles/Careers.css";
import NavBar from "./NavBar";
import banner from "../assets/Careers/banner2x.png";
import Footer from "./Footer";
import { career } from "../utils";

interface Resumeform {
  name?: string;
  email?: string;
  mobile?: string;
}
const Careers = () => {
  const [data, setData] = useState<career[]>([]);
  const [formData, setFormData] = useState<Resumeform>({
    name: "",
    email: "",
    mobile: "",
  });
  const [file, setFile] = useState<File>();
  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://localhost:8000/careers",
      headers: {},
    };

    axios(config)
      .then(function (response: any) {
        setData(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (
    e: any,
    id: any,
    careertitle: any,
    careerdomain: any
  ) => {
    e.preventDefault();
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("name", formData.name);
    data.append("careerId", id);
    data.append("email", formData.email);
    data.append("mobilenumber", formData.mobile);
    data.append("careertitle", careertitle);
    data.append("careerdomain", careerdomain);
    data.append("resume", file);

    var config = {
      method: "post",
      url: "http://localhost:8000/uploadresume",
      data: data,
    };

    axios(config)
      .then(function (response: any) {
        alert(JSON.stringify(response.data.message));
        window.location.reload();
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  const pe = data.filter((career: career) => {
    if (career.domain === "Product Engineering") {
      return true;
    }
    return false;
  });

  const pd = data.filter((career: career) => {
    if (career.domain === "Product Design") {
      return true;
    }
    return false;
  });

  const inv = data.filter((career: career) => {
    if (career.domain === "Innovations") {
      return true;
    }
    return false;
  });

  const manufact = data.filter((career: career) => {
    if (career.domain === "Manufacturing Solutions") {
      return true;
    }
    return false;
  });
  return (
    <Fragment>
      <NavBar />
      <section className="bannercar-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
              <h2 className="txt-2 pb-3">Careers</h2>
              <p className="txt-3-dp">
                Love the work you do? <br />
                Well, you'll love it more doing it with us!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center p-0">
              <img className="bannerimg" src={banner} />
            </div>
          </div>
        </div>
      </section>

      <section className="why-wth-us pt-5 pb-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
              <h2 className="txt-2 pb-3">Why work with us?</h2>
              <p className="txt-3-dp">
                When you work with us, <br />
                you will have 3 major benefits
              </p>
            </div>
          </div>
          <div className="row pt-5 why-about">
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 pb-5 why-icon">
              <p className="txt-2 pt-4 pb-2">
                <span className="txt-2 pt-4 pb-2">1. </span>
                <br />
                Shaping the company
              </p>
              <p className="body-bold">
                You will play an active and important role in shaping the future
                of our comapny
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 pb-5 why-icon">
              <p className="txt-2 pt-4 pb-2">
                <span className="txt-2 pt-4 pb-2">2. </span>
                <br />
                Play with technology
              </p>
              <p className="body-bold">
                From cutting edge softwares to latest 3d printers, You will get
                to play with the latest and greatest in tech
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 pb-5 why-icon">
              <p className="txt-2 pt-4 pb-2">
                <span className="txt-2 pt-4 pb-2">3. </span>
                <br />
                Competitive salaries
              </p>
              <p className="body-bold">
                You will be receiving very competitive stipends and salaries
                based on the value you add to our vision
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="tab-sec pt-3 pb-5 job-list">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <h2 className="txt-2 pb-5 text-center">Open Positions</h2>
              <div className="tab-main pt-2">
                <div className="wrap-tab">
                  <nav>
                    <div
                      className="nav nav-tabs nav-justified px-5"
                      id="nav-tab"
                      role="tablist"
                    >
                      {pe && pe.length > 0 && (
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
                      )}
                      {pd && pd.length > 0 && (
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
                      )}
                      {inv && inv.length > 0 && (
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
                      )}
                      {manufact && manufact.length > 0 && (
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
                      )}
                    </div>
                  </nav>
                </div>
              </div>
              <div
                className="tab-content industry-sec pt-2 pb-4"
                id="nav-tabContent"
              >
                <div
                  className="container tab-pane fade show active"
                  id="nav-menu1"
                  role="tabpanel"
                  aria-labelledby="nav-menu1-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center mb-5">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                      {pe.map(
                        (career: career) =>
                          career &&
                          career.isactive && (
                            <Fragment key={career.id}>
                              <div
                                className="card mt-5 text-bg-light"
                                data-bs-toggle="modal"
                                data-bs-target={`#${career.id}`}
                              >
                                <div className="card-body">
                                  <p className="txt-3-bold">{career.title}</p>
                                  <p className="body-bold py-2">
                                    {career.description}
                                  </p>
                                  <ul className="mt-3">
                                    <li>{career.type}</li>
                                    <li>{career.experience} experience</li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                className="modal fade"
                                id={`${career.id}`}
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog ">
                                  <div className="modal-content border">
                                    <div className="modal-header">
                                      <h4 className="modal-title txt-3-dp">
                                        Role
                                      </h4>
                                      <button
                                        type="button"
                                        className="close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        &times;
                                      </button>
                                    </div>

                                    <div className="modal-body">
                                      <h2 className="txt-2">{career.title}</h2>
                                      <ul className="mt-3">
                                        <li>{career.type}</li>
                                        <li>{career.experience} experience</li>
                                      </ul>
                                      <div className="row align-content-center">
                                        <div className="row col-xl-6 col-lg-6 col-md-6 col-12 pt-3 align-content-center">
                                          <p className="txt-3-dp py-3">
                                            Description
                                          </p>
                                          <p className="body-bold pb-2">
                                            {career.description}
                                          </p>
                                          <div className="skills">
                                            <p className="txt-3-dp pb-2">
                                              Skills
                                            </p>
                                            {career.skills
                                              ?.split("@#$@ ")
                                              .map(
                                                (skill: string) =>
                                                  skill && (
                                                    <p className="body-bold">
                                                      - {skill}
                                                    </p>
                                                  )
                                              )}
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                          <div
                                            className="card pt-3"
                                            style={{ width: "18rem" }}
                                          >
                                            <div className="card-body">
                                              <form
                                                onSubmit={(e) =>
                                                  handleSubmit(
                                                    e,
                                                    career.id,
                                                    career.title,
                                                    career.domain
                                                  )
                                                }
                                              >
                                                <div className="my-1 col-xl-12 col-lg-12 col-md-12 col-12">
                                                  <label
                                                    htmlFor="title"
                                                    className="form-label"
                                                  >
                                                    Name
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    aria-describedby="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                  />
                                                </div>
                                                <div className="my-1 col-xl-12 col-lg-12 col-md-12 col-12">
                                                  <label
                                                    htmlFor="title"
                                                    className="form-label"
                                                  >
                                                    Email
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="email"
                                                    className="form-control"
                                                    id="email"
                                                    aria-describedby="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                  />
                                                </div>
                                                <div className="my-1 col-xl-12 col-lg-12 col-md-12 col-12">
                                                  <label
                                                    htmlFor="title"
                                                    className="form-label"
                                                  >
                                                    Mobile Number
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="mobile"
                                                    className="form-control"
                                                    id="mobile"
                                                    aria-describedby="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    required
                                                  />
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 my-1">
                                                  <label className="form-label">
                                                    Resume
                                                  </label>
                                                  <input
                                                    type="file"
                                                    className="form-control"
                                                    name="file"
                                                    onChange={(e: any) => {
                                                      setFile(
                                                        e.target.files[0]
                                                      );
                                                    }}
                                                    required
                                                  />
                                                </div>
                                                <div className="row justify-content-center">
                                                  <button
                                                    type="submit"
                                                    className="btn btn-primary my-3 col-xl-6 col-lg-6 col-md-6 col-6"
                                                  >
                                                    Apply Now
                                                  </button>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Fragment>
                          )
                      )}
                    </div>
                  </div>
                  <Footer />
                </div>
                <div
                  className="container tab-pane fade"
                  id="nav-menu2"
                  role="tabpanel"
                  aria-labelledby="nav-menu2-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center mb-5">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                      {pd.map(
                        (career: career) =>
                          career &&
                          career.isactive && (
                            <Fragment key={career.id}>
                              <div
                                className="card mt-5 text-bg-light"
                                data-bs-toggle="modal"
                                data-bs-target={`#${career.id}`}
                              >
                                <div className="card-body">
                                  <p className="txt-3-bold">{career.title}</p>
                                  <p className="body-bold py-2">
                                    {career.description}
                                  </p>
                                  <ul className="mt-3">
                                    <li>{career.type}</li>
                                    <li>{career.experience} experience</li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                className="modal fade"
                                id={`${career.id}`}
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog ">
                                  <div className="modal-content border">
                                    <div className="modal-header">
                                      <h4 className="modal-title txt-3-dp">
                                        Role
                                      </h4>
                                      <button
                                        type="button"
                                        className="close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        &times;
                                      </button>
                                    </div>

                                    <div className="modal-body">
                                      <h2 className="txt-2">{career.title}</h2>
                                      <ul className="mt-3">
                                        <li>{career.type}</li>
                                        <li>{career.experience} experience</li>
                                      </ul>
                                      <div className="row align-content-center">
                                        <div className="row col-xl-6 col-lg-6 col-md-6 col-12 pt-3 align-content-center">
                                          <p className="txt-3-dp py-3">
                                            Description
                                          </p>
                                          <p className="body-bold pb-2">
                                            {career.description}
                                          </p>
                                          <div className="skills">
                                            <p className="txt-3-dp pb-2">
                                              Skills
                                            </p>
                                            {career.skills
                                              ?.split("@#$@ ")
                                              .map(
                                                (skill: string) =>
                                                  skill && (
                                                    <p className="body-bold">
                                                      - {skill}
                                                    </p>
                                                  )
                                              )}
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                          <div
                                            className="card pt-3"
                                            style={{ width: "18rem" }}
                                          >
                                            <div className="card-body">
                                              <form
                                                onSubmit={(e) =>
                                                  handleSubmit(
                                                    e,
                                                    career.id,
                                                    career.title,
                                                    career.domain
                                                  )
                                                }
                                              >
                                                <div className="my-1 col-xl-12 col-lg-12 col-md-12 col-12">
                                                  <label
                                                    htmlFor="title"
                                                    className="form-label"
                                                  >
                                                    Name
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    aria-describedby="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                  />
                                                </div>
                                                <div className="my-1 col-xl-12 col-lg-12 col-md-12 col-12">
                                                  <label
                                                    htmlFor="title"
                                                    className="form-label"
                                                  >
                                                    Email
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="email"
                                                    className="form-control"
                                                    id="email"
                                                    aria-describedby="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                  />
                                                </div>
                                                <div className="my-1 col-xl-12 col-lg-12 col-md-12 col-12">
                                                  <label
                                                    htmlFor="title"
                                                    className="form-label"
                                                  >
                                                    Mobile Number
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="mobile"
                                                    className="form-control"
                                                    id="mobile"
                                                    aria-describedby="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    required
                                                  />
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 my-1">
                                                  <label className="form-label">
                                                    Resume
                                                  </label>
                                                  <input
                                                    type="file"
                                                    className="form-control"
                                                    name="file"
                                                    onChange={(e: any) => {
                                                      setFile(
                                                        e.target.files[0]
                                                      );
                                                    }}
                                                    required
                                                  />
                                                </div>
                                                <div className="row justify-content-center">
                                                  <button
                                                    type="submit"
                                                    className="btn btn-primary my-3 col-xl-6 col-lg-6 col-md-6 col-6"
                                                  >
                                                    Apply Now
                                                  </button>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Fragment>
                          )
                      )}
                    </div>
                  </div>
                  <Footer />
                </div>
                <div
                  className="container tab-pane fade"
                  id="nav-menu3"
                  role="tabpanel"
                  aria-labelledby="nav-menu3-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center mb-5">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                      {inv.map(
                        (career: career) =>
                          career &&
                          career.isactive && (
                            <Fragment key={career.id}>
                              <div
                                className="card mt-5 text-bg-light"
                                data-bs-toggle="modal"
                                data-bs-target={`#${career.id}`}
                              >
                                <div className="card-body">
                                  <p className="txt-3-bold">{career.title}</p>
                                  <p className="body-bold py-2">
                                    {career.description}
                                  </p>
                                  <ul className="mt-3">
                                    <li>{career.type}</li>
                                    <li>{career.experience} experience</li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                className="modal fade"
                                id={`${career.id}`}
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog ">
                                  <div className="modal-content border">
                                    <div className="modal-header">
                                      <h4 className="modal-title txt-3-dp">
                                        Role
                                      </h4>
                                      <button
                                        type="button"
                                        className="close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        &times;
                                      </button>
                                    </div>

                                    <div className="modal-body">
                                      <h2 className="txt-2">{career.title}</h2>
                                      <ul className="mt-3">
                                        <li>{career.type}</li>
                                        <li>{career.experience} experience</li>
                                      </ul>
                                      <div className="row align-content-center">
                                        <div className="row col-xl-6 col-lg-6 col-md-6 col-12 pt-3 align-content-center">
                                          <p className="txt-3-dp py-3">
                                            Description
                                          </p>
                                          <p className="body-bold pb-2">
                                            {career.description}
                                          </p>
                                          <div className="skills">
                                            <p className="txt-3-dp pb-2">
                                              Skills
                                            </p>
                                            {career.skills
                                              ?.split("@#$@ ")
                                              .map(
                                                (skill: string) =>
                                                  skill && (
                                                    <p className="body-bold">
                                                      - {skill}
                                                    </p>
                                                  )
                                              )}
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                          <div
                                            className="card pt-3"
                                            style={{ width: "18rem" }}
                                          >
                                            <div className="card-body">
                                              <form
                                                onSubmit={(e) =>
                                                  handleSubmit(
                                                    e,
                                                    career.id,
                                                    career.title,
                                                    career.domain
                                                  )
                                                }
                                              >
                                                <div className="my-1 col-xl-12 col-lg-12 col-md-12 col-12">
                                                  <label
                                                    htmlFor="title"
                                                    className="form-label"
                                                  >
                                                    Name
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    aria-describedby="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                  />
                                                </div>
                                                <div className="my-1 col-xl-12 col-lg-12 col-md-12 col-12">
                                                  <label
                                                    htmlFor="title"
                                                    className="form-label"
                                                  >
                                                    Email
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="email"
                                                    className="form-control"
                                                    id="email"
                                                    aria-describedby="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                  />
                                                </div>
                                                <div className="my-1 col-xl-12 col-lg-12 col-md-12 col-12">
                                                  <label
                                                    htmlFor="title"
                                                    className="form-label"
                                                  >
                                                    Mobile Number
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="mobile"
                                                    className="form-control"
                                                    id="mobile"
                                                    aria-describedby="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    required
                                                  />
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 my-1">
                                                  <label className="form-label">
                                                    Resume
                                                  </label>
                                                  <input
                                                    type="file"
                                                    className="form-control"
                                                    name="file"
                                                    onChange={(e: any) => {
                                                      setFile(
                                                        e.target.files[0]
                                                      );
                                                    }}
                                                    required
                                                  />
                                                </div>
                                                <div className="row justify-content-center">
                                                  <button
                                                    type="submit"
                                                    className="btn btn-primary my-3 col-xl-6 col-lg-6 col-md-6 col-6"
                                                  >
                                                    Apply Now
                                                  </button>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Fragment>
                          )
                      )}
                    </div>
                  </div>
                  <Footer />
                </div>
                <div
                  className="container tab-pane fade"
                  id="nav-menu4"
                  role="tabpanel"
                  aria-labelledby="nav-menu4-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center mb-5">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                      {manufact.map(
                        (career: career) =>
                          career &&
                          career.isactive && (
                            <Fragment key={career.id}>
                              <div
                                className="card mt-5 text-bg-light"
                                data-bs-toggle="modal"
                                data-bs-target={`#${career.id}`}
                              >
                                <div className="card-body">
                                  <p className="txt-3-bold">{career.title}</p>
                                  <p className="body-bold py-2">
                                    {career.description}
                                  </p>
                                  <ul className="mt-3">
                                    <li>{career.type}</li>
                                    <li>{career.experience} experience</li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                className="modal fade"
                                id={`${career.id}`}
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog ">
                                  <div className="modal-content border">
                                    <div className="modal-header">
                                      <h4 className="modal-title txt-3-dp">
                                        Role
                                      </h4>
                                      <button
                                        type="button"
                                        className="close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        &times;
                                      </button>
                                    </div>

                                    <div className="modal-body">
                                      <h2 className="txt-2">{career.title}</h2>
                                      <ul className="mt-3">
                                        <li>{career.type}</li>
                                        <li>{career.experience} experience</li>
                                      </ul>
                                      <div className="row align-content-center">
                                        <div className="row col-xl-6 col-lg-6 col-md-6 col-12 pt-3 align-content-center">
                                          <p className="txt-3-dp py-3">
                                            Description
                                          </p>
                                          <p className="body-bold pb-2">
                                            {career.description}
                                          </p>
                                          <div className="skills">
                                            <p className="txt-3-dp pb-2">
                                              Skills
                                            </p>
                                            {career.skills
                                              ?.split("@#$@ ")
                                              .map(
                                                (skill: string) =>
                                                  skill && (
                                                    <p className="body-bold">
                                                      - {skill}
                                                    </p>
                                                  )
                                              )}
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                          <div
                                            className="card pt-3"
                                            style={{ width: "18rem" }}
                                          >
                                            <div className="card-body">
                                              <form
                                                onSubmit={(e) =>
                                                  handleSubmit(
                                                    e,
                                                    career.id,
                                                    career.title,
                                                    career.domain
                                                  )
                                                }
                                              >
                                                <div className="my-1 col-xl-12 col-lg-12 col-md-12 col-12">
                                                  <label
                                                    htmlFor="title"
                                                    className="form-label"
                                                  >
                                                    Name
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    aria-describedby="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                  />
                                                </div>
                                                <div className="my-1 col-xl-12 col-lg-12 col-md-12 col-12">
                                                  <label
                                                    htmlFor="title"
                                                    className="form-label"
                                                  >
                                                    Email
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="email"
                                                    className="form-control"
                                                    id="email"
                                                    aria-describedby="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                  />
                                                </div>
                                                <div className="my-1 col-xl-12 col-lg-12 col-md-12 col-12">
                                                  <label
                                                    htmlFor="title"
                                                    className="form-label"
                                                  >
                                                    Mobile Number
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="mobile"
                                                    className="form-control"
                                                    id="mobile"
                                                    aria-describedby="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    required
                                                  />
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 my-1">
                                                  <label className="form-label">
                                                    Resume
                                                  </label>
                                                  <input
                                                    type="file"
                                                    className="form-control"
                                                    name="file"
                                                    onChange={(e: any) => {
                                                      setFile(
                                                        e.target.files[0]
                                                      );
                                                    }}
                                                    required
                                                  />
                                                </div>
                                                <div className="row justify-content-center">
                                                  <button
                                                    type="submit"
                                                    className="btn btn-primary my-3 col-xl-6 col-lg-6 col-md-6 col-6"
                                                  >
                                                    Apply Now
                                                  </button>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Fragment>
                          )
                      )}
                    </div>
                  </div>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Careers;
