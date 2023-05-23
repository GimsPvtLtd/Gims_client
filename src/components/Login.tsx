import React, { useState, useContext } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { Usercontext } from "../utils/Context";
var bcrypt = require("bcryptjs");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { setRole } = useContext(Usercontext);

  const handlelogin = (event: any) => {
    event.preventDefault();
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      email,
      password,
    });
    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/login",
      credentials: "include",
      data: data,
    };

    axios(config)
      .then(function (response: any) {
        alert(JSON.stringify(response.data.message));
        if (response.data.user) {
          cookies.set(
            "auth",
            { token: response.data.token, user: response.data.user },
            { path: "/" }
          );
          navigate("/admin");
        }
        window.location.reload();
        setRole({ token: response.data.token, user: response.data.user });
      })
      .catch(function (error: any) {
        alert(error);
      });
  };

  return (
    <div className="row loginform">
      <div className="card login-card col-xl-4 col-lg-12 col-md-12 col-12">
        <div className="card-body">
          <form onSubmit={handlelogin}>
            <h3 className="text-center">Login</h3>
            <br />
            <input
              type="text"
              className="form-control"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              type="password"
              className="form-control"
              required
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button className="btn btn-primary" type="submit">
              Login
            </button>
            <br />
            <br />
          </form>
        </div>
        <div className="card-footer text-muted">
          <div className="row">
            <div className="forgotpass">
              <h6 className="col-6" onClick={() => navigate("/forgotpassword")}>
                Forgot Password ?
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
