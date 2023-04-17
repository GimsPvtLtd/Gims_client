import React, { Fragment, useContext, useState } from "react";
import NavBar from "./NavBar";
import "../styles/Services.css";
import dummy from "../assets/services/dummy.png";
import Footer from "./Footer";
import { Service } from "../utils";
import { Usercontext } from "../utils/Context";
import { FaTrash } from "react-icons/fa";
import SubmitRequirement from "./SubmitRequirement";
import { useNavigate } from "react-router-dom";
interface FormData {
  name: string;
  designation: string;
  email: string;
  companyName: string;
  address: string;
  mobileNumber: string;
  fieldOfService: string;
  requirements: string;
  file: File | Blob;
}
const Services = () => {
  const [data, setData] = useState<Service[]>([]);
  const { auth } = useContext(Usercontext);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    designation: "",
    companyName: "",
    address: "",
    mobileNumber: "",
    fieldOfService: "",
    requirements: "",
    file: new File([""], ""),
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.files &&
      setFormData({
        ...formData,
        file: event.target.files[0],
      });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("name", formData.name);
    data.append("designation", formData.designation);
    data.append("companyname", formData.companyName);
    data.append("mobile", formData.mobileNumber);
    data.append("address", formData.address);
    data.append("fieldofservice", formData.fieldOfService);
    data.append("requirements", formData.requirements);
    data.append("requirement", formData.file);

    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/addrequirement",
      data: data,
    };

    axios(config)
      .then(function (response: any) {
        alert(JSON.stringify(response.data));
        window.location.reload();
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  React.useEffect(() => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "/service",
      headers : {},
    };

    axios(config)
      .then(function (response: any) {
        setData(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);
  const handledelete = (id: any) => {
    var axios = require("axios");

    var config = {
      method: "delete",
      url: `${process.env.REACT_APP_BACKEND_URL}/service/${id}`,
      headers: {
        authorization : auth?.token
      },
    };

    axios(config)
      .then(function (response: any) {
        alert(JSON.stringify(response.data));
        window.location.reload();
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  const rnd = data && data.filter((ser) => {
    return ser.servicetype === "R&D";
  });
  const ma = data && data.filter((ser) => {
    return ser.servicetype === "Manufacturing and automation";
  });
  const design =data && data.filter((ser) => {
    return ser.servicetype === "Design";
  });
  const navigate = useNavigate();
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
            {rnd && rnd.length > 0 && (
              <Fragment>
                <div className="col-xl-12 col-lg-12 col-md-12 col-12 pb-5">
                  <h2 className="txt-2">R&D</h2>
                </div>
                {rnd.map((ser) => {
                  return (
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 col-12 pb-5"
                      key={ser.id}
                    >
                      <div
                        className="card"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <img
                          className="card-img-top"
                          src={`${process.env.REACT_APP_BACKEND_URL}/services/${ser.imglocation}`}
                        />
                        <div className="card-body">
                          <p className="txt-3-dp text-center">{ser.name}</p>
                          <div className="row justify-content-center">
                            {auth && auth.user?.role === "ADMIN" && (
                              <button
                                className="btn btn-danger col-4 m-2"
                                onClick={() => handledelete(ser.id)}
                              >
                                <FaTrash />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Fragment>
            )}

            {/* <!-- Manufacturing and automation --> */}
            {ma && ma.length > 0 && (
              <Fragment>
                <div className="col-xl-12 col-lg-12 col-md-12 col-12 pb-5 pt-3">
                  <h2 className="txt-2">Manufacturing and automation</h2>
                </div>
                {ma.map((ser) => {
                  return (
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 col-12 pb-5"
                      key={ser.id}
                    >
                      <div
                        className="card"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <img
                          className="card-img-top"
                          src={`${process.env.REACT_APP_BACKEND_URL}/services/${ser.imglocation}`}
                        />
                        <div className="card-body">
                          <p className="txt-3-dp text-center">{ser.name}</p>
                          <div className="row justify-content-center">
                            {auth && auth.user?.role === "ADMIN" && (
                              <button
                                className="btn btn-danger col-4 m-2"
                                onClick={() => handledelete(ser.id)}
                              >
                                <FaTrash />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Fragment>
            )}

            {/* <!-- Design --> */}
            {design && design.length > 0 && (
              <Fragment>
                <div className="col-xl-12 col-lg-12 col-md-12 col-12 pb-5 pt-3">
                  <h2 className="txt-2">Design</h2>
                </div>
                {design.map((ser) => {
                  return (
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 col-12 pb-5"
                      key={ser.id}
                    >
                      <div
                        className="card"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <img
                          className="card-img-top"
                          src={`${process.env.REACT_APP_BACKEND_URL}/services/${ser.imglocation}`}
                        />
                        <div className="card-body">
                          <p className="txt-3-dp text-center">{ser.name}</p>
                          <div className="row justify-content-center">
                            {auth && auth.user?.role === "ADMIN" && (
                              <button
                                className="btn btn-danger col-4 m-2"
                                onClick={() => handledelete(ser.id)}
                              >
                                <FaTrash />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Fragment>
            )}
          </div>
        </div>
      </section>
      {/* <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title txt-3-dp">
                Personalised Hot wire cutter
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

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
      </div> */}

      {/* <!-- Indusrty sec Ends --> */}

      <section className="industry-sec pb-5 px-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 pb-5">
              <h2 className="txt-3-dp">
                Have a project you think we could work our magic in?
              </h2>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 pb-5">
              <div className="banner-links">
                <div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={()=> navigate("/submitrequirement")}
                  >
                    Submit requirements
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        {/* <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Submit Requirements
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-1">
                    <label htmlFor="name" className="form-label">
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
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="cname" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="companyName"
                      aria-describedby="cname"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="designation" className="form-label">
                      Designation
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="designation"
                      aria-describedby="designation"
                      value={formData.designation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      aria-describedby="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="number" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="mobileNumber"
                      aria-describedby="mobile"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="name" className="form-label">
                      Address
                    </label>
                    <input
                      className="form-control"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="field" className="form-label">
                      Field of Service
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="fieldOfService"
                      aria-describedby="mobile"
                      value={formData.fieldOfService}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="Requirements" className="form-label">
                      Requirements
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="requirements"
                      aria-describedby="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="field" className="form-label">
                      Any relevant documents
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </div>

      <Footer />
    </Fragment>
  );
};

export default Services;
