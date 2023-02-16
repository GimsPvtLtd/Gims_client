import React, { Fragment } from "react";
import NavBar from "./NavBar";
import "../styles/Team.css";

const Team = () => {
  return (
    <Fragment>
      <NavBar />
      <section className="bannerteam-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
              <h2 className="txt-2 pb-3">Meet Our Team</h2>
              <p className="txt-3-dp">
                If everyone is moving forward together,
                <br /> then success takes care of itself!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Team;
