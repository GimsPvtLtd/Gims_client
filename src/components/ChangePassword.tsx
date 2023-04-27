import React, { Fragment, useState, useContext } from "react";
import { Usercontext } from "../utils/Context";
const ChangePassword = () => {
  const [password, setPassword] = useState<any>("");
  const [confpass, setConfPassword] = useState<any>("");
  const [aler, setAlert] = useState<any>();
  const { auth } = useContext(Usercontext);
  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (password && confpass === password) {
      var axios = require("axios");
      var qs = require("qs");
      var data = qs.stringify({
        password,
      });
      var config = {
        method: "post",
        url: process.env.REACT_APP_BACKEND_URL + "/changepass",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          authorization: auth?.token,
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
    } else {
      setAlert(true);
    }
  };
  return (
    <Fragment>
      {aler && (
        <div className="alert alert-danger mt-4" role="alert">
          Password and Confirm Password must be same
        </div>
      )}
      <form
        className="mt-3"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        method="POST"
      >
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter New Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className={"form-control passCheck"}
              value={confpass}
              onChange={(e) => {
                setConfPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default ChangePassword;
