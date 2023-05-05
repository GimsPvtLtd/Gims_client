import React, { Fragment, useContext, useEffect, useState } from "react";
import AddService from "./AddService";
import { User, requirements } from "../utils";
import Moment from "moment";
import { FaArrowRight } from "react-icons/fa";
import { Usercontext } from "../utils/Context";

const ServicesAdmin = () => {
  const [data, setData] = useState<requirements[]>();
  const { auth } = useContext(Usercontext);
  const [users, setUsers] = useState<User[]>([]);
  const [assign, setAssign] = useState("");
  const [requirement, setRequriement] = useState("");

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "/requirement",
      headers: {
        authorization: auth?.token,
      },
    };

    axios(config)
      .then(function (response: any) {
        setData(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });

    var config2 = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "/users",
      headers: {},
    };

    axios(config2)
      .then(function (response: any) {
        setUsers(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      userid: assign,
      requirementId: requirement,
    });

    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/assigntask",
      data: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        authorization: auth?.token,
      },
    };

    axios(config)
      .then(function (response: any) {
        alert("Task Assigned");
        window.location.reload();
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  return (
    <section className="tab-sec pt-5">
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
                      id="nav-menu1s-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-menu1s"
                      type="button"
                      role="tab"
                      aria-controls="nav-menu1s"
                      aria-selected="true"
                    >
                      <p className="body-sm">Add Service</p>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-menu2s-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-menu2s"
                      type="button"
                      role="tab"
                      aria-controls="nav-menu2s"
                      aria-selected="false"
                    >
                      <p className="body-sm">Requirements</p>
                    </button>
                    {/* <button
                      className="nav-link"
                      id="nav-menu3-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-menu3"
                      type="button"
                      role="tab"
                      aria-controls="nav-menu3"
                      aria-selected="false"
                    >
                      <p className="body-sm">Services</p>
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
                    </button> */}
                  </div>
                </nav>
              </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="container tab-pane fade show active"
                id="nav-menu1s"
                role="tabpanel"
                aria-labelledby="nav-menu1s-tab"
                tabIndex={0}
              >
                <div className="row justify-content-center p-3">
                  <h3 className="mt-4">Add Service</h3>
                  <AddService />
                </div>
              </div>
              <div
                className="container tab-pane fade"
                id="nav-menu2s"
                role="tabpanel"
                aria-labelledby="nav-menu2s-tab"
                tabIndex={0}
              >
                <Fragment>
                  <h3 className="mt-4">Assign Task</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row justify-content-center m-2 p-2">
                      <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                        <label className="form-label">User</label>
                        <select
                          className="form-select"
                          name="assign"
                          aria-describedby="assign"
                          value={assign}
                          onChange={(e) => setAssign(e.target.value)}
                        >
                          <option selected>select User</option>
                          {users.map((usr) => (
                            <option value={usr.userid}>{usr.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                        <label className="form-label">Requirement</label>
                        <select
                          className="form-select"
                          name="requirement"
                          aria-describedby="requirement"
                          value={requirement}
                          onChange={(e) => setRequriement(e.target.value)}
                        >
                          <option selected>select Requirement</option>
                          {data &&
                            data
                              .filter((req: requirements) => {
                                return !req.completedby;
                              })
                              .map((req: requirements) => (
                                <option value={req.id}>
                                  {req.name} {" , "} {req.companyname} {" , "}{" "}
                                  {req.requirements}
                                </option>
                              ))}
                        </select>
                      </div>
                    </div>
                    <div className="row justify-content-center m-2 p-2">
                      <button
                        className="btn btn-primary col-xl-2 col-6"
                        type="submit"
                      >
                        Assign Task
                      </button>
                    </div>
                  </form>

                  <div className="row justify-content-center m-2 p-2">
                    {data &&
                      data.map((req: requirements) => (
                        <Fragment>
                          <div className="col-xl-4 col-lg-12 col-md-12 col-12 mt-2">
                            <div className="card text-center">
                              <div className="card-header bg-warning">
                                <h5>
                                  <b>{req.companyname}</b>
                                </h5>
                              </div>
                              <div className="card-body">
                                <h5 className="card-title">
                                  {req.fieldofservice}
                                </h5>
                                <p className="card-text">{req.requirements}</p>
                                <a
                                  className="text-primary"
                                  href={`/requirement/${req.id}`}
                                >
                                  <b>
                                    Show More <FaArrowRight />
                                  </b>
                                </a>
                              </div>
                              <div className="card-footer text-muted">
                                <h5>
                                  <span className="badge rounded-pill bg-primary">
                                    {Moment(req.date).format("DD-MM-YYYY")}
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </Fragment>
                      ))}
                  </div>
                </Fragment>
              </div>
              {/* <div
                className="container tab-pane fade"
                id="nav-menu3"
                role="tabpanel"
                aria-labelledby="nav-menu3-tab"
                tabIndex={0}
              >
                <div className="row justify-content-center"></div>
              </div>
              <div
                className="container tab-pane fade"
                id="nav-menu4"
                role="tabpanel"
                aria-labelledby="nav-menu4-tab"
                tabIndex={0}
              >
                <div className="row justify-content-center"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAdmin;
