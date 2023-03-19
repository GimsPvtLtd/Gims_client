import React, { Fragment, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Product } from "../utils";

const AddProduct = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: "http://localhost:8000/products",
    };

    axios(config)
      .then(function (response: any) {
        setData(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescrip] = useState("");
  const [design, setDesign] = useState("");
  const [motor, setMotor] = useState("");
  const [waterspeed, setWaterspeed] = useState("");
  const [dimensions, setDimesion] = useState("");
  const [load, setLoad] = useState("");
  const [construction, setConstruction] = useState("");
  const [techspec, setTechspec] = useState("");
  const [image, setImg] = useState("");
  const [file, setFile] = useState("");
  const [spec, setSpec] = useState([{ key: "", value: "" }]);

  const handleSpecInput = ({
    ind,
    event,
  }: {
    ind: number;
    event: React.ChangeEvent<HTMLInputElement>;
  }) => {
    const values = [...spec];

    if (event.target.name === "key") {
      values[ind]["key"] = event.target.value;
    } else {
      values[ind]["value"] = event.target.value;
    }
    setSpec(values);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let des = "###";
    spec.map((sp) => {
      des += `${sp.key}:${sp.value} ###`;
    });
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("name", name);
    data.append("type", type);
    data.append("description", description + des);
    data.append("design", design);
    data.append("motor", motor);
    data.append("waterspeeds", waterspeed);
    data.append("dimensions", dimensions);
    data.append("load", load);
    data.append("construction", construction);
    data.append("technicalspecs", techspec);
    data.append("uploadedproduct", image);
    data.append("uploadedproduct", file);

    var config = {
      method: "post",
      url: "http://localhost:8000/addproduct",
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
          <div className="col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Type
            </label>
            <select
              className="form-select"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option selected>select menu</option>
              <option value="Product Engineering">Product Engineering</option>
              <option value="Product Design">Product Design</option>
              <option value="Innovations">Innovations</option>
              <option value="Manufacturing Solutions">
                Manufacturing Solutions
              </option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="industryexperience"
              value={description}
              rows={5}
              onChange={(e) => {
                setDescrip(e.target.value);
              }}
            />
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <h4 className="my-1">Specifications</h4>
              </label>
            </div>
          </div>
          <div className="row justify-content-center">
            {spec.map((sp, ind) => {
              return (
                <div className="row justify-content-center" key={"spec" + ind}>
                  <div className="col-xl-4 col-lg-12 col-md-12 col-12 m-2">
                    <label htmlFor={"speckey" + ind} className="form-label">
                      Specification
                    </label>
                    <input
                      name="key"
                      type="text"
                      className="form-control"
                      id={"speckey" + ind}
                      value={sp.key}
                      onChange={(event) => handleSpecInput({ ind, event })}
                    />
                  </div>
                  <div className="col-xl-4 col-lg-12 col-md-12 col-12 m-2">
                    <label htmlFor={"specval" + ind} className="form-label">
                      Value
                    </label>
                    <input
                      name="value"
                      type="text"
                      className="form-control"
                      id={"specval" + ind}
                      value={sp.value}
                      onChange={(event) => handleSpecInput({ ind, event })}
                    />
                  </div>
                  {ind == spec.length - 1 ? (
                    <div className="row justify-content-center">
                      <div className="col-xl-2 col-lg-12 col-md-12 col-12 m-2">
                        <button
                          className="btn btn-success form-control"
                          onClick={() =>
                            setSpec([...spec, { key: "", value: "" }])
                          }
                        >
                          Add Specification
                        </button>
                      </div>
                      <div className="col-xl-2 col-lg-12 col-md-12 col-12 m-2">
                        <button
                          className={
                            ind === 0
                              ? "btn btn-danger form-control disabled"
                              : "btn btn-danger form-control"
                          }
                          onClick={() => {
                            const values = [...spec];
                            values.splice(ind, 1);
                            setSpec(values);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <label htmlFor="design" className="form-label">
                Design
              </label>
              <input
                type="text"
                className="form-control"
                id="design"
                value={design}
                onChange={(e) => {
                  setDesign(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <label htmlFor="motor" className="form-label">
                Motor
              </label>
              <input
                type="text"
                className="form-control"
                id="motor"
                value={motor}
                onChange={(e) => {
                  setMotor(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <label htmlFor="waterspeed" className="form-label">
                Waterspeed
              </label>
              <input
                type="text"
                className="form-control"
                id="waterspeed"
                value={waterspeed}
                onChange={(e) => {
                  setWaterspeed(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <label htmlFor="dimensions" className="form-label">
                Dimensions
              </label>
              <input
                type="text"
                className="form-control"
                id="dimensions"
                value={dimensions}
                onChange={(e) => {
                  setDimesion(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <label htmlFor="load" className="form-label">
                Maximum Load
              </label>
              <input
                type="text"
                className="form-control"
                id="load"
                value={load}
                onChange={(e) => {
                  setLoad(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <label htmlFor="construction" className="form-label">
                Construction
              </label>
              <input
                type="text"
                className="form-control"
                id="construction"
                value={construction}
                onChange={(e) => {
                  setConstruction(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <label htmlFor="techspec" className="form-label">
                Technical Specification
              </label>
              <input
                type="text"
                className="form-control"
                id="techspec"
                value={techspec}
                onChange={(e) => {
                  setTechspec(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                className="form-control"
                name="uploadedImages"
                onChange={(e: any) => {
                  setImg(e.target.files[0]);
                }}
                required
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Brochure
              </label>
              <input
                type="file"
                className="form-control"
                name="uploadedImages"
                onChange={(e: any) => {
                  setFile(e.target.files[0]);
                }}
                required
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <section className="container py-5 text-center">
        <h3 className="m-2">Products</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Type</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((product: Product, ind) => (
                <tr>
                  <th scope="row">{ind + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.type}</td>
                  <td><a className="btn btn-primary" href={`/upload/${product.id}`}>Upload Images/FAQs</a></td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </Fragment>
  );
};

export default AddProduct;
