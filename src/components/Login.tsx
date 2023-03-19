import React, { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
      url: "http://localhost:8000/login",
      credentials: "include",
      data: data,
    };

    axios(config)
      .then(function (response: any) {
        alert(JSON.stringify(response.data));
        navigate("/");
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              type="password"
              className="form-control"
              required
              placeholder="password"
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
      </div>
    </div>
  );
};

export default Login;
