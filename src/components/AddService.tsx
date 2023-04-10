import React, { Fragment, useState, useContext } from "react";
import { Usercontext } from "../utils/Context";

const AddService = () => {
  const [type, setType] = useState("");
  const [file, setFile] = useState<File[]>([new File([""], "")]);
  const [filename, setFileName] = useState<string[]>([""]);
  const { auth } = useContext(Usercontext);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var names: string = "";

    filename.map((name) => {
      names += name + " @#$@ ";
    });
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("name", names);
    data.append("type", type);

    file.map((img) => {
      data.append("serviceImg", img);
    });

    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/addservice",
      data: data,
      headers:{
      authorization: auth?.token,
      }
    };

    axios(config)
      .then(function (response: any) {
        alert(JSON.stringify(response.data));
        window.location.reload();
      })
      .catch(function (error: any) {
        alert(error.message);
      });
  };
  const handleImgInput = ({ ind, event }: { ind: number; event: any }) => {
    if (event.target.name === "img") {
      const values = [...file];

      values[ind] = event.target.files[0];

      setFile(values);
    } else if (event.target.name === "imgname") {
      const values = [...filename];
      values[ind] = event.target.value;
      setFileName(values);
    }
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
              <option value="R&D">R & D</option>
              <option value="Manufacturing and automation">
                Manufacturing and automation
              </option>
              <option value="Design">Design</option>
            </select>
          </div>
          <section className="container mt-2">
            <h3>Upload Images</h3>
            <div className="row justify-content-center mt-4">
              {file.map((sp, ind) => {
                return (
                  <div
                    className="row justify-content-center"
                    key={"Image" + ind}
                  >
                    <div className="col-xl-5 col-lg-12 col-md-12 col-12 m-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Name
                      </label>
                      <input
                        name="imgname"
                        type="text"
                        className="form-control"
                        id={"Imagename" + ind}
                        value={filename[ind]}
                        onChange={(event) => handleImgInput({ ind, event })}
                      />
                    </div>

                    <div className="col-xl-5 col-lg-12 col-md-12 col-12 m-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Image
                      </label>
                      <input
                        name="img"
                        type="file"
                        accept="image/*"
                        className="form-control"
                        id={"Imageupload" + ind}
                        onChange={(event) => handleImgInput({ ind, event })}
                      />
                    </div>

                    {ind == file.length - 1 ? (
                      <div className="row justify-content-center">
                        <div className="col-xl-2 col-lg-12 col-md-12 col-12 m-2">
                          <button
                            className="btn btn-success form-control"
                            onClick={() =>
                              setFile([...file, new File([""], "")])
                            }
                          >
                            Add Image
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
                              const values = [...file];
                              const names = [...filename];
                              values.splice(ind, 1);
                              names.splice(ind, 1);
                              setFile(values);
                              setFileName(names);
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
          </section>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default AddService;
