import React, { Fragment, useState, useContext } from "react";
import { Usercontext } from "../utils/Context";

const AddTeam = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [industryexperience, setIndexp] = useState("");
  const [researchexperience, setResearchExp] = useState("");
  const [designskills, setDesign] = useState("");
  const [pm, setPM] = useState("");
  const [creativity, setCreativity] = useState("");
  const [ps, setPS] = useState("");
  const [indknow, setIndKnow] = useState("");
  const [manufact, setManu] = useState("");
  const [selfmotive, setMotive] = useState("");
  const [stamina, setSta] = useState("");
  const [reflex, setReflex] = useState("");
  const [intell, setIntell] = useState("");
  const [hf, setHF] = useState("");
  const [sarcasam, setSarcasm] = useState("");
  const [speed, setSpeed] = useState("");
  const [image, setImg] = useState("");
  const [heroimg, setHeroImg] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [number, setNumber] = useState("");
  const [serialno,setSerial] = useState("");
  const { auth } = useContext(Usercontext);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("name", name);
    data.append("role", role);
    data.append("uploadedImages", image);
    data.append("uploadedImages", heroimg);
    data.append("industryexperience", industryexperience);
    data.append("researchexperience", researchexperience);
    data.append("designskills", designskills);
    data.append("projectmanagement", pm);
    data.append("creativity", creativity);
    data.append("programmingskills", ps);
    data.append("industryknowledge", indknow);
    data.append("manufacturing", manufact);
    data.append("selfmotivation", selfmotive);
    data.append("stamina", stamina);
    data.append("reflex", reflex);
    data.append("intelligence", intell);
    data.append("healingfactor", hf);
    data.append("sarcasm", sarcasam);
    data.append("speed", speed);
    data.append("email", email);
    data.append("linkedin", linkedin);
    data.append("number", number);
    data.append("serialno",serialno)

    console.log(image);
    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/addmember",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data; ",
        authorization: auth?.token,
      },
    };

    axios(config)
      .then(function (response: any) {
        alert("Team Member Added Successfully ....");
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
              Role
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <h5 className="my-2">Industry Skills</h5>
            </label>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Industry Experience
            </label>
            <input
              type="number"
              className="form-control"
              id="industryexperience"
              value={industryexperience}
              onChange={(e) => {
                setIndexp(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Research Experience
            </label>
            <input
              type="number"
              className="form-control"
              id="researchexperience"
              value={researchexperience}
              onChange={(e) => {
                setResearchExp(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Design Skills
            </label>
            <input
              type="number"
              className="form-control"
              id="Design"
              value={designskills}
              onChange={(e) => {
                setDesign(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Project Management
            </label>
            <input
              type="number"
              className="form-control"
              id="PM"
              value={pm}
              onChange={(e) => {
                setPM(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Creativity
            </label>
            <input
              type="number"
              className="form-control"
              id="Creativity"
              value={creativity}
              onChange={(e) => {
                setCreativity(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Programming Skills
            </label>
            <input
              type="number"
              className="form-control"
              id="PS"
              value={ps}
              onChange={(e) => {
                setPS(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Industry Knowledge
            </label>
            <input
              type="number"
              className="form-control"
              id="IndKnow"
              value={indknow}
              onChange={(e) => {
                setIndKnow(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Manufacturing
            </label>
            <input
              type="number"
              className="form-control"
              id="Manufact"
              value={manufact}
              onChange={(e) => {
                setManu(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <h5 className="my-2">Superpowers</h5>
            </label>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Self Motivation
            </label>
            <input
              type="number"
              className="form-control"
              id="selfmotive"
              value={selfmotive}
              onChange={(e) => {
                setMotive(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Stamina
            </label>
            <input
              type="number"
              className="form-control"
              id="stamina"
              value={stamina}
              onChange={(e) => {
                setSta(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Reflex
            </label>
            <input
              type="number"
              className="form-control"
              id="Reflex"
              value={reflex}
              onChange={(e) => {
                setReflex(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Intelligence
            </label>
            <input
              type="number"
              className="form-control"
              id="Intelli"
              value={intell}
              onChange={(e) => {
                setIntell(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Healing Factor
            </label>
            <input
              type="number"
              className="form-control"
              id="HF"
              value={hf}
              onChange={(e) => {
                setHF(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Sarcasam
            </label>
            <input
              type="number"
              className="form-control"
              id="sarcasam"
              value={sarcasam}
              onChange={(e) => {
                setSarcasm(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Speed
            </label>
            <input
              type="number"
              className="form-control"
              id="speed"
              value={speed}
              onChange={(e) => {
                setSpeed(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Linkedin profile
            </label>
            <input
              type="text"
              className="form-control"
              id="linkedin"
              value={linkedin}
              onChange={(e) => {
                setLinkedin(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Number
            </label>
            <input
              type="text"
              className="form-control"
              id="number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Serial No
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              value={serialno}
              onChange={(e) => {
                setSerial(e.target.value);
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
              Hero Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              name="uploadedImages"
              onChange={(e: any) => {
                setHeroImg(e.target.files[0]);
              }}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default AddTeam;
