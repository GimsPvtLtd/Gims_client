import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import "../styles/RequirementPage.css";
import { requirements } from "../utils";
import Moment from "moment";

const RequirementPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<requirements>();

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `${process.env.REACT_APP_BACKEND_URL}/requirement/${id}`,
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
  return (
    <Fragment>
      <NavBar />
      <section className="banner-req">
        <div className="container">
          <h2 className="mt-3 text-center">Requirement Details</h2>
          <table className="table table-striped table-hover table-striped-columns m-2 border border-secondary">
            <tbody>
              <tr>
                <th scope="row">Company Name : </th>
                <td>{data?.companyname}</td>
              </tr>
              <tr>
                <th scope="row">Area Of Service : </th>
                <td>{data?.fieldofservice}</td>
              </tr>
              <tr>
                <th colSpan={2} className="text-center">
                  Requirement{" "}
                </th>
              </tr>
              <tr>
                <td colSpan={2} className="text-center">
                  {data?.requirements}{" "}
                </td>
              </tr>
              <tr>
                <th scope="row">Relevent Files: </th>
                <td>
                  <a
                    href={`${process.env.REACT_APP_BACKEND_URL}/requirements/${data?.filelocation}`}
                    target="_blank"
                  >
                    CLick Here
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">Submitted Date : </th>
                <td>
                  {" "}
                  <h5>
                    <span className="badge rounded-pill bg-primary">
                      {Moment(data?.date).format("DD-MM-YYYY")}
                    </span>
                  </h5>
                </td>
              </tr>
              <tr>
                <th scope="row">Task Status : </th>
                <td><h5>
                    <span className="badge rounded-pill bg-danger">Pending</span></h5></td>
              </tr>
              <tr>
                <th colSpan={2} className="text-center">
                  Contact Person Details{" "}
                </th>
              </tr>
              <tr>
                <th scope="row">Name : </th>
                <td>{data?.name}</td>
              </tr>
              <tr>
                <th scope="row">Designation : </th>
                <td>{data?.designation}</td>
              </tr>
              <tr>
                <th scope="row">Mobile Number: </th>
                <td>{data?.mobile}</td>
              </tr>
              <tr>
                <th scope="row">Email : </th>
                <td>{data?.email}</td>
              </tr>
              <tr>
                <th scope="row">Address : </th>
                <td>{data?.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Fragment>
  );
};

export default RequirementPage;
