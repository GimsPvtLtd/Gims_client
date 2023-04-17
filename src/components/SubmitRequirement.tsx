import React, { Fragment, useState } from "react";
import NavBar from "./NavBar";
import "../styles/RequirementPage.css";

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

const SubmitRequirement = () => {
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
  return (
    <Fragment>
      <NavBar />
      <div className="container banner-reqsubmit">
        <h1 className="text-center" id="exampleModalLabel">
          Submit Requirements
        </h1>
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SubmitRequirement;
