import React, { Fragment, useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { Timesheet } from "../utils";

const DisplayTimesheet = () => {
  const { id } = useParams();
  const [data, setData] = useState<Timesheet[]>([]);

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const usr = params.get("usr");
  let hrs: number = 0;
  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `http://localhost:8000/timesheet/${id}`,
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
          <h2 className="mt-3 text-center">TimeSheet Details for {usr}</h2>
          <table className="table table-striped table-hover table-striped-columns m-2">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Start time</th>
                  <th scope="col">End time</th>
                  <th scope="col">No of Hours</th>
                  <th scope="col">Description</th>
                  <th scope="col">Updated On</th>
                </tr>
              </thead>
              <tbody>
                {data.map((time, ind) => {
                  if (time.noofhours) hrs += parseInt(time.noofhours);
                  return (
                    <tr key={time.id}>
                      <th scope="row">{ind + 1}</th>
                      <td>{time.starttime}</td>
                      <td>{time.endtime}</td>
                      <td>{time.noofhours}</td>
                      <td>{time.description}</td>
                      <td>{time.updatedon}</td>
                    </tr>
                  );
                })}
                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td>Total No of Hours</td>
                  <td>
                    <b>{hrs}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </table>
        </div>
      </section>
    </Fragment>
  );
};

export default DisplayTimesheet;
