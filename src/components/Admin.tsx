import React, { Fragment, useContext } from "react";
import NavBar from "./NavBar";
import "../styles/Admin.css";
import Teammembers from "./Teammembers";
import AddTeam from "./AddTeam";
import AddProduct from "./AddProduct";
import AddService from "./AddService";
import ServicesAdmin from "./ServicesAdmin";
import AddCareer from "./AddCareer";
import CareerAdmin from "./CareerAdmin";
import AddUser from "./AddUser";
import AddTimesheet from "./AddTimesheet";
import ApplyLeave from "./ApplyLeave";
import LeaveAdmin from "./LeaveAdmin";
import ChangePassword from "./ChangePassword";
import { Usercontext } from "../utils/Context";
import TaskAdmin from "./TaskAdmin";

const Admin = () => {
  const { auth } = useContext(Usercontext);
  return (
    <Fragment>
      <NavBar />
      <section className="banneradmin-sec">
        <h2>Admin Page</h2>
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
                      {auth?.user?.role === "ADMIN" && (
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
                          <p className="body-sm">Team</p>
                        </button>
                      )}
                      {(auth?.user?.role === "ADMIN" ||
                        auth?.user?.role === "MARKETING") && (
                        <button
                          className="nav-link"
                          id="nav-menu2-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-menu2"
                          type="button"
                          role="tab"
                          aria-controls="nav-menu2"
                          aria-selected={auth?.user?.role === "MARKETING"}
                        >
                          <p className="body-sm">Product</p>
                        </button>
                      )}
                      {(auth?.user?.role === "ADMIN" ||
                        auth?.user?.role === "TECHNICIAN" ||
                        auth?.user?.role === "ENGINEER") && (
                        <button
                          className="nav-link"
                          id="nav-menu3-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-menu3"
                          type="button"
                          role="tab"
                          aria-controls="nav-menu3"
                          aria-selected={
                            auth?.user?.role === "TECHNICIAN" ||
                            auth?.user?.role === "ENGINEER"
                          }
                        >
                          <p className="body-sm">Services</p>
                        </button>
                      )}
                      {(auth?.user?.role === "ADMIN" ||
                        auth?.user?.role === "HR") && (
                        <button
                          className="nav-link"
                          id="nav-menu4-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-menu4"
                          type="button"
                          role="tab"
                          aria-controls="nav-menu4"
                          aria-selected={auth?.user?.role === "HR"}
                        >
                          <p className="body-sm">Career</p>
                        </button>
                      )}
                      {auth?.user?.role === "ADMIN" && (
                        <button
                          className="nav-link"
                          id="nav-menu5-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-menu5"
                          type="button"
                          role="tab"
                          aria-controls="nav-menu5"
                          aria-selected="false"
                        >
                          <p className="body-sm">Create User</p>
                        </button>
                      )}
                      <button
                        className="nav-link"
                        id="nav-menu6-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu6"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu6"
                        aria-selected={auth?.user?.role === undefined}
                      >
                        <p className="body-sm">Tasks</p>
                      </button>
                      <button
                        className="nav-link"
                        id="nav-menu7-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu7"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu7"
                        aria-selected="false"
                      >
                        <p className="body-sm">Apply Leave</p>
                      </button>
                      <button
                        className="nav-link"
                        id="nav-menu8-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu8"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu8"
                        aria-selected="false"
                      >
                        <p className="body-sm">Password</p>
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="tab-content" id="nav-tabContent">
                {auth?.user?.role === "ADMIN" && (
                  <div
                    className="container tab-pane fade show active"
                    id="nav-menu1"
                    role="tabpanel"
                    aria-labelledby="nav-menu1-tab"
                    tabIndex={0}
                  >
                    <div className="row justify-content-center p-3">
                      <h3 className="mt-2">Add Team Member</h3>
                      <AddTeam />
                    </div>
                    <Teammembers isAdmin={true} />
                  </div>
                )}
                {(auth?.user?.role === "ADMIN" ||
                  auth?.user?.role === "MARKETING") && (
                  <div
                    className={
                      auth?.user?.role === "MARKETING"
                        ? "container tab-pane fade show active"
                        : "container tab-pane fade"
                    }
                    id="nav-menu2"
                    role="tabpanel"
                    aria-labelledby="nav-menu2-tab"
                    tabIndex={0}
                  >
                    <div className="row justify-content-center">
                      <h3 className="mt-2">Add Product</h3>
                      <AddProduct />
                    </div>
                  </div>
                )}
                {(auth?.user?.role === "ADMIN" ||
                  auth?.user?.role === "TECHNICIAN" ||
                  auth?.user?.role === "ENGINEER") && (
                  <div
                    className={
                      auth?.user?.role === "TECHNICIAN" ||
                      auth?.user?.role === "ENGINEER"
                        ? "container tab-pane fade show active"
                        : "container tab-pane fade"
                    }
                    id="nav-menu3"
                    role="tabpanel"
                    aria-labelledby="nav-menu3-tab"
                    tabIndex={0}
                  >
                    <div className="row justify-content-center">
                      <ServicesAdmin />
                    </div>
                  </div>
                )}
                {(auth?.user?.role === "ADMIN" ||
                  auth?.user?.role === "HR") && (
                  <div
                    className={
                      auth?.user?.role === "HR"
                        ? "container tab-pane fade show active"
                        : "container tab-pane fade"
                    }
                    id="nav-menu4"
                    role="tabpanel"
                    aria-labelledby="nav-menu4-tab"
                    tabIndex={0}
                  >
                    <div className="row justify-content-center">
                      <CareerAdmin />
                    </div>
                  </div>
                )}
                {auth?.user?.role === "ADMIN" && (
                  <div
                    className="container tab-pane fade"
                    id="nav-menu5"
                    role="tabpanel"
                    aria-labelledby="nav-menu5-tab"
                    tabIndex={0}
                  >
                    <div className="row justify-content-center">
                      <AddUser />
                    </div>
                  </div>
                )}
                <div
                  className={
                    auth?.user?.role
                      ? "container tab-pane fade"
                      : "container tab-pane fade show active"
                  }
                  id="nav-menu6"
                  role="tabpanel"
                  aria-labelledby="nav-menu6-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center">
                   <TaskAdmin />
                  </div>
                </div>
                <div
                  className="container tab-pane fade"
                  id="nav-menu7"
                  role="tabpanel"
                  aria-labelledby="nav-menu7-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center">
                    <LeaveAdmin />
                  </div>
                </div>
                <div
                  className="container tab-pane fade"
                  id="nav-menu8"
                  role="tabpanel"
                  aria-labelledby="nav-menu8-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center">
                    <ChangePassword />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Admin;
