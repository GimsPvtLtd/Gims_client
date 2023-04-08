import React, { Fragment, useState, useEffect, useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { career } from "../utils";
import Moment from "moment";
import { Usercontext } from "../utils/Context";
interface FormData {
  title?: string;
  description?: string;
  type?: string;
  experience?: string;
  domain?: string;
  skills?: string;
  noOfOpenings?: number;
  location?: string;
}
const AddCareer = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    type: "",
    experience: "",
    domain: "",
    skills: "",
    noOfOpenings: 0,
    location: "",
  });
  const [skills, setSkills] = useState([""]);
  const [data, setData] = useState<career[]>([]);
  const { auth } = useContext(Usercontext);

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://localhost:8000/careers",
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

  const handleClick = (id: any, status: any) => {
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      id,
      status,
    });
    var config = {
      method: "put",
      url: "http://localhost:8000/career",
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
  };
  const handleSkillInput = ({
    ind,
    event,
  }: {
    ind: number;
    event: React.ChangeEvent<HTMLInputElement>;
  }) => {
    const values = [...skills];

    values[ind] = event.target.value;

    setSkills(values);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let skill = "";

    await skills.map((sk) => {
      skill += sk + " @#$@ ";
    });
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      title: formData.title,
      description: formData.description,
      type: formData.type,
      experience: formData.experience,
      domain: formData.domain,
      skills: skill,
      noOfOpenings: formData.noOfOpenings,
      location: formData.location,
    });
    var config = {
      method: "post",
      url: "http://localhost:8000/addcareer",
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
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <div className="my-2 col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="title" className="form-label">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              aria-describedby="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-2 col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="type" className="form-label">
              Job Type
            </label>
            <input
              type="text"
              className="form-control"
              name="type"
              aria-describedby="type"
              value={formData.type}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1 col-xl-12 col-lg-12 col-md-12 col-12">
            <label htmlFor="description" className="form-label">
              Job Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              aria-describedby="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-1 col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="experience" className="form-label">
              Job Experience
            </label>
            <input
              type="experience"
              className="form-control"
              name="experience"
              aria-describedby="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1 col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="number" className="form-label">
              Domain
            </label>
            <select
              className="form-select"
              name="domain"
              aria-describedby="domain"
              value={formData.domain}
              onChange={handleChange}
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
          <div className="mb-1 col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="name" className="form-label">
              No Of Openings
            </label>
            <input
              className="form-control"
              name="noOfOpenings"
              value={formData.noOfOpenings}
              onChange={handleChange}
            />
          </div>
          <div className="mb-1 col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="field" className="form-label">
              Job location
            </label>
            <input
              type="text"
              className="form-control"
              name="location"
              aria-describedby="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="my-2">
            <label htmlFor="skills" className="form-label text-center">
              Skills
            </label>
            {skills.map((sp, ind) => {
              return (
                <div className="row ">
                  <div className="col-xl-4 col-lg-12 col-md-12 col-12 m-2">
                    <input
                      type="text"
                      className="form-control"
                      id={"skill" + ind}
                      value={sp}
                      onChange={(event) => handleSkillInput({ ind, event })}
                    />
                  </div>
                  {ind == skills.length - 1 ? (
                    <Fragment>
                      <div className="col-xl-1 col-lg-12 col-md-12 col-12 m-1">
                        <div
                          className="btn btn-success"
                          onClick={() => setSkills([...skills, ""])}
                        >
                          <FaPlus />
                        </div>
                      </div>
                      <div className="col-xl-1 col-lg-12 col-md-12 col-12 m-1">
                        <div
                          className={
                            ind === 0
                              ? "btn btn-danger disabled"
                              : "btn btn-danger"
                          }
                          onClick={() => {
                            const values = [...skills];
                            values.splice(ind, 1);
                            setSkills(values);
                          }}
                        >
                          <FaMinus />
                        </div>
                      </div>
                    </Fragment>
                  ) : null}
                </div>
              );
            })}
          </div>
          <button
            type="submit"
            className="btn btn-primary my-3 col-xl-2 col-lg-6 col-md-6 col-6"
          >
            Submit
          </button>
        </div>
      </form>
      <h2>Careers</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">SI.NO</th>
            <th scope="col">Title</th>
            <th scope="col">Domain</th>
            <th scope="col">No of registrantions</th>
            <th scope="col">Posted On</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((career, ind) => (
            <tr key={career.id}>
              <th scope="row">{ind + 1}</th>
              <td>{career.title}</td>
              <td>{career.domain}</td>
              <td>{career.totalregistrants}</td>
              <td>{Moment(career?.postedon).format("DD-MM-YYYY")}</td>
              <td>
                {career.isactive ? (
                  <button
                    className="btn btn-danger"
                    onClick={() => handleClick(career.id, false)}
                  >
                    Make Inactive
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={() => handleClick(career.id, true)}
                  >
                    Make Active
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default AddCareer;
