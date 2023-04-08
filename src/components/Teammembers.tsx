import React, { Fragment, useContext } from "react";
import "../styles/Team.css";
import { FaEnvelope, FaLinkedin, FaTrash, FaWhatsapp } from "react-icons/fa";
import { details } from "../utils";
import { Usercontext } from "../utils/Context";

interface Props {
  isAdmin?: boolean;
}

const Teammembers = ({ isAdmin }: Props) => {
  const [data, setData] = React.useState([]);
  const { auth } = useContext(Usercontext);
  React.useEffect(() => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: "http://localhost:8000/teammembers",
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

  const deletemember = (id?: number) => {
    var axios = require("axios");

    var config = {
      method: "delete",
      url: `http://localhost:8000/deletemember/${id}`,
      headers: {
        authorization: auth?.token,
      },
    };

    axios(config)
      .then(function (response: any) {
        console.log(JSON.stringify(response.data));
        window.location.reload();
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  return (
    <Fragment>
      <section className="industry-secteam pb-5">
        <div className="container">
          <div className="row">
            {data?.map((detail: details) => (
              <Fragment>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12 pb-5">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={`http://localhost:8000/images/${detail.image}`}
                    />
                    <div className="card-body text-center">
                      <p className="txt-3-semi">
                        {detail?.name?.toUpperCase()}
                      </p>
                      <p className="txt-3-dp">{detail?.role?.toUpperCase()}</p>
                    </div>
                    <div className="back-flip">
                      {/* Nav tabs */}
                      <nav>
                        <div className="nav nav-tabs">
                          <button
                            className="nav-link active txt-3-dp"
                            id={`nav-${detail.name + "1"}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#nav-${detail.name + "1"}`}
                            type="button"
                            role="tab"
                            aria-controls={`nav-${detail.name + "1"}`}
                            aria-selected="true"
                          >
                            Industry
                          </button>
                          <button
                            className="nav-link txt-3-dp"
                            id={`nav-${detail.name + "2"}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#nav-${detail.name + "2"}`}
                            type="button"
                            role="tab"
                            aria-controls={`nav-${detail.name + "2"}`}
                            aria-selected="true"
                          >
                            Superpowers
                          </button>
                        </div>
                      </nav>
                      {isAdmin && (
                        <div className="row m-1">
                          <button
                            className="btn btn-danger"
                            onClick={() => deletemember(detail.id)}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      )}
                      {/* Tab panes */}
                      <div
                        className="tab-content"
                        id="nav-tabContent"
                        style={{
                          backgroundImage:
                            "url(" +
                            `http://localhost:8000/images/${detail.heroimg}` +
                            ")",
                          // backgroundSize: "cover",
                          // backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div
                          className="container  tab-pane show active fade"
                          id={`nav-${detail.name + "1"}`}
                          role="tabpanel"
                          aria-labelledby={`nav-${detail.name + "1"}-tab`}
                          tabIndex={0}
                        >
                          <br />
                          <div className="row transbox justify-content-center align-content-center">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-8 py-5 details-sec">
                              <p className="txt-3-wt">Industry Experience</p>
                              <br />
                              <p className="txt-3-wt">Research Experience</p>
                              <br />
                              <p className="txt-3-wt">Design Skills</p>
                              <br />
                              <p className="txt-3-wt">Project Management</p>
                              <br />
                              <p className="txt-3-wt">Creativity</p>
                              <br />
                              <p className="txt-3-wt">Programming Skills</p>
                              <br />
                              <p className="txt-3-wt">Industry Knowledge</p>
                              <br />
                              <p className="txt-3-wt">Manufacturing</p>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-4 py-5 details-sec">
                              <div className="progress">
                                <div
                                  className="progress-bar fw-bold"
                                  style={{
                                    width: `${detail.industryexperience}%`,
                                  }}
                                >
                                  {detail.industryexperience}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: `${detail.researchexperience}%`,
                                  }}
                                >
                                  {detail.researchexperience}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.designskills}%` }}
                                >
                                  {detail.designskills}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: `${detail.projectmanagement}%`,
                                  }}
                                >
                                  {detail.projectmanagement}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.creativity}%` }}
                                >
                                  {detail.creativity}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: `${detail.programmingskills}%`,
                                  }}
                                >
                                  {detail.programmingskills}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: `${detail.industryknowledge}%`,
                                  }}
                                >
                                  {detail.industryknowledge}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.manufacturing}%` }}
                                >
                                  {detail.manufacturing}
                                </div>
                              </div>
                              <br />
                            </div>
                          </div>
                        </div>
                        <div
                          className="container  tab-pane show active tab-pane1 fade"
                          id={`nav-${detail.name + "2"}`}
                          role="tabpanel"
                          aria-labelledby={`nav-${detail.name + "2"}-tab`}
                          tabIndex={0}
                        >
                          <br />
                          <div className="row transbox justify-content-center align-content-center">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-6 py-5 details-sec">
                              <p className="txt-3-wt">Self Motivation</p>
                              <br />
                              <p className="txt-3-wt">Stamina</p>
                              <br />
                              <p className="txt-3-wt">Reflex</p>
                              <br />
                              <p className="txt-3-wt">Intelligence</p>
                              <br />
                              <p className="txt-3-wt">Healing Factor</p>
                              <br />
                              <p className="txt-3-wt">Sarcasm</p>
                              <br />
                              <p className="txt-3-wt">Speed</p>
                              <br />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-6 py-5 details-sec">
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.selfmotivation}%` }}
                                >
                                  {detail.selfmotivation}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.stamina}%` }}
                                >
                                  {detail.stamina}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.reflex}%` }}
                                >
                                  {detail.reflex}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.intelligence}%` }}
                                >
                                  {detail.intelligence}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.healingfactor}%` }}
                                >
                                  {detail.healingfactor}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.sarcasm}%` }}
                                >
                                  {detail.sarcasm}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.speed}%` }}
                                >
                                  {detail.speed}
                                </div>
                              </div>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="row justify-content-center">
                        {detail.email && (
                          <div className="col-xl-4 col-lg-4 col-md-4 col-4 text-lg-left text-center">
                            <a
                              href={`mailto:${detail.email}`}
                              className="body-bold-2"
                            >
                              <FaEnvelope className="text-danger display-6" />
                            </a>
                          </div>
                        )}
                        {detail.linkedin && (
                          <div className="col-xl-4 col-lg-4 col-md-4 col-4 text-lg-left text-center">
                            <a
                              href={`${detail.linkedin}`}
                              target={"_blank"}
                              className="body-bold-2"
                            >
                              <FaLinkedin className="text-primary display-6" />
                            </a>
                          </div>
                        )}

                        {detail.number && (
                          <div className="col-xl-4 col-lg-4 col-md-4 col-4 text-lg-left text-center">
                            <a
                              href={`tel:${detail.number}`}
                              target={"_blank"}
                              className="body-bold-2"
                            >
                              <FaWhatsapp className="text-success display-6" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Teammembers;