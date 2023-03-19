import React, { Fragment, useState } from "react";

const AddTimesheet = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      starttime: startDate,
      endtime: endDate,
      noOfhours: duration,
      userId: "GIMS001",
      description,
      updatedOn: new Date().toISOString(),
    });
    var config = {
      method: "post",
      url: "http://localhost:8000/uploadtimesheet",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
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
  return (
    <Fragment>
      <form
        className="mt-3"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        method="POST"
      >
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label className="form-label">Start Time</label>
            <input
              type="datetime-local"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label className="form-label">End Time</label>
            <input
              type="datetime-local"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label className="form-label">Working Hours</label>
            <input
              type="number"
              className="form-control"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12 my-2">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary col-xl-2 col-lg-6 col-md-6 col-6 my-2"
          >
            Upload Timesheet
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default AddTimesheet;
