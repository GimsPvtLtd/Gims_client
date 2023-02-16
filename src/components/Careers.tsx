import React, { Fragment } from "react";
import "../styles/Careers.css";
import NavBar from "./NavBar";
import banner from "../assets/Careers/banner2x.png";
import Footer from "./Footer";
const Careers = () => {
  return (
    <Fragment>
      <NavBar />

      <section className="bannercar-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
              <h2 className="txt-2 pb-3">Careers</h2>
              <p className="txt-3-dp">
                Love the work you do? <br />
                Well, you'll love it more doing it with us!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center p-0">
              <img className="bannerimg" src={banner} />
            </div>
          </div>
        </div>
      </section>

      <section className="why-wth-us pt-5 pb-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
              <h2 className="txt-2 pb-3">Why work with us?</h2>
              <p className="txt-3-dp">
                When you work with us, <br />
                you will have 3 major benefits
              </p>
            </div>
          </div>
          <div className="row pt-5 why-about">
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 pb-5 why-icon">
              <p className="txt-2 pt-4 pb-2">
                <span className="txt-2 pt-4 pb-2">1. </span>
                <br />
                Shaping the company
              </p>
              <p className="body-bold">
                You will play an active and important role in shaping the future
                of our comapny
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 pb-5 why-icon">
              <p className="txt-2 pt-4 pb-2">
                <span className="txt-2 pt-4 pb-2">2. </span>
                <br />
                Play with technology
              </p>
              <p className="body-bold">
                From cutting edge softwares to latest 3d printers, You will get
                to play with the latest and greatest in tech
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 pb-5 why-icon">
              <p className="txt-2 pt-4 pb-2">
                <span className="txt-2 pt-4 pb-2">3. </span>
                <br />
                Competitive salaries
              </p>
              <p className="body-bold">
                You will be receiving very competitive stipends and salaries
                based on the value you add to our vision
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="tab-sec pt-3 pb-5 job-list">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <h2 className="txt-2 pb-5 text-center">Open Positions</h2>
              <div className="tab-main pt-2">
                <div className="wrap-tab">
                  <nav>
                    <div
                      className="nav nav-tabs nav-justified px-5"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="nav-menu1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu1"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu1"
                        aria-selected="true"
                      >
                        <p className="body-sm">Product Engineering</p>
                      </button>
                      <button
                        className="nav-link"
                        id="nav-menu2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu2"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu2"
                        aria-selected="false"
                      >
                        <p className="body-sm">Product Design</p>
                      </button>
                      <button
                        className="nav-link"
                        id="nav-menu3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu3"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu3"
                        aria-selected="false"
                      >
                        <p className="body-sm">Innovations</p>
                      </button>
                      <button
                        className="nav-link"
                        id="nav-menu4-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu4"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu4"
                        aria-selected="false"
                      >
                        <p className="body-sm">Manufacturing Solutions</p>
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
              <div
                className="tab-content industry-sec pt-2 pb-4"
                id="nav-tabContent"
              >
                <div
                  className="container tab-pane fade show active"
                  id="nav-menu1"
                  role="tabpanel"
                  aria-labelledby="nav-menu1-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                      <div
                        className="card mt-5"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <div className="card-body">
                          <p className="txt-3-bold">Senior Product designer</p>
                          <p className="body-bold py-2">
                            We are looking for an experienced product designer
                            to guide an propel the team foreward
                          </p>
                          <ul className="mt-3">
                            <li>Full Time</li>
                            <li>10 - 15 years experience</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <div className="card-body">
                          <p className="txt-3-bold">Senior Product designer</p>
                          <p className="body-bold py-2">
                            We are looking for an experienced product designer
                            to guide an propel the team foreward
                          </p>
                          <ul className="mt-3">
                            <li>Full Time</li>
                            <li>10 - 15 years experience</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <div className="card-body">
                          <p className="txt-3-bold">Senior Product designer</p>
                          <p className="body-bold py-2">
                            We are looking for an experienced product designer
                            to guide an propel the team foreward
                          </p>
                          <ul className="mt-3">
                            <li>Full Time</li>
                            <li>10 - 15 years experience</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <div className="card-body">
                          <p className="txt-3-bold">Senior Product designer</p>
                          <p className="body-bold py-2">
                            We are looking for an experienced product designer
                            to guide an propel the team foreward
                          </p>
                          <ul className="mt-3">
                            <li>Full Time</li>
                            <li>10 - 15 years experience</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="container tab-pane fade"
                  id="nav-menu2"
                  role="tabpanel"
                  aria-labelledby="nav-menu2-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                      <div className="card mt-5">
                        <div className="card-body">
                          <p className="txt-3-bold">Senior Product designer</p>
                          <p className="body-bold py-2">
                            We are looking for an experienced product designer
                            to guide an propel the team foreward
                          </p>
                          <ul className="mt-3">
                            <li>Full Time</li>
                            <li>10 - 15 years experience</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <div className="card-body">
                          <p className="txt-3-bold">Senior Product designer</p>
                          <p className="body-bold py-2">
                            We are looking for an experienced product designer
                            to guide an propel the team foreward
                          </p>
                          <ul className="mt-3">
                            <li>Full Time</li>
                            <li>10 - 15 years experience</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <div className="card-body">
                          <p className="txt-3-bold">Senior Product designer</p>
                          <p className="body-bold py-2">
                            We are looking for an experienced product designer
                            to guide an propel the team foreward
                          </p>
                          <ul className="mt-3">
                            <li>Full Time</li>
                            <li>10 - 15 years experience</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="container tab-pane fade"
                  id="nav-menu3"
                  role="tabpanel"
                  aria-labelledby="nav-menu3-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                      <div className="card mt-5">
                        <div className="card-body">
                          <p className="txt-3-bold">Senior Product designer</p>
                          <p className="body-bold py-2">
                            We are looking for an experienced product designer
                            to guide an propel the team foreward
                          </p>
                          <ul className="mt-3">
                            <li>Full Time</li>
                            <li>10 - 15 years experience</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <div className="card-body">
                          <p className="txt-3-bold">Senior Product designer</p>
                          <p className="body-bold py-2">
                            We are looking for an experienced product designer
                            to guide an propel the team foreward
                          </p>
                          <ul className="mt-3">
                            <li>Full Time</li>
                            <li>10 - 15 years experience</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <div className="card-body">
                          <p className="txt-3-bold">Senior Product designer</p>
                          <p className="body-bold py-2">
                            We are looking for an experienced product designer
                            to guide an propel the team foreward
                          </p>
                          <ul className="mt-3">
                            <li>Full Time</li>
                            <li>10 - 15 years experience</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <div className="card-body">
                          <p className="txt-3-bold">Senior Product designer</p>
                          <p className="body-bold py-2">
                            We are looking for an experienced product designer
                            to guide an propel the team foreward
                          </p>
                          <ul className="mt-3">
                            <li>Full Time</li>
                            <li>10 - 15 years experience</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="container tab-pane fade"
                  id="nav-menu4"
                  role="tabpanel"
                  aria-labelledby="nav-menu4-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                      <div className="card mt-5">
                        <div className="card-body">
                          <p className="txt-3-bold">Senior Product designer</p>
                          <p className="body-bold py-2">
                            We are looking for an experienced product designer
                            to guide an propel the team foreward
                          </p>
                          <ul className="mt-3">
                            <li>Full Time</li>
                            <li>10 - 15 years experience</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <div className="card-body">
                          <p className="txt-3-bold">Senior Product designer</p>
                          <p className="body-bold py-2">
                            We are looking for an experienced product designer
                            to guide an propel the team foreward
                          </p>
                          <ul className="mt-3">
                            <li>Full Time</li>
                            <li>10 - 15 years experience</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card mt-5">
                        <div className="card-body">
                          <p className="txt-3-bold">Senior Product designer</p>
                          <p className="body-bold py-2">
                            We are looking for an experienced product designer
                            to guide an propel the team foreward
                          </p>
                          <ul className="mt-3">
                            <li>Full Time</li>
                            <li>10 - 15 years experience</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal" id="myModal">
	    <div className="modal-dialog">
	      <div className="modal-content">
	      
	        <div className="modal-header">
	          <h4 className="modal-title txt-3-dp">Role</h4>
	          <button type="button" className="close" data-dismiss="modal">&times;</button>
	        </div>
	        
	        <div className="modal-body">
	        	<h2 className="txt-2">Senior Product designer</h2>
	        	<ul className="mt-3">
			  		<li>Full Time</li>
			  		<li>10 - 15 years experience</li>
			  	</ul>
	        	<p className="txt-3-dp pt-3 pb-2">Description</p>
	        	<p className="body-bold">We are looking for a product designer who can be focussed and keen to work either in a team or alone. We are looking for a product designer who can be focussed and keen to work either in a team or alone.</p>
	        	<div className="row">
	        		<div className="col-xl-6 col-lg-6 col-md-6 col-12 pt-3">
			        	<div className="skills">
			        		<p className="txt-3-dp pb-2">Skills</p>
		        			<p className="body-bold">- Design vvisualisation</p> 
		        			<p className="body-bold">- People management</p>
			        	</div>
			        </div>
			        <div className="col-xl-6 col-lg-6 col-md-6 col-12 pt-3 upload-btn">
			        	<form className="jobpost-form" id="ajax-contact" name="c-assignments-form" encType="multipart/form-data" method="POST" action="mailer-job/function/career.php">
			        		<div className="form-group"><label htmlFor="applicant_resume">Attach Resume<span className="sjb-required required">*</span></label>
                                <div className="file">
                                    <div> <input type="file" name="myfile" id="fileToUpload" accept=".pdf,.doc,.jpg,.jpeg,.png,.docx,.txt" className="required" required /> </div>
                                </div>
                                <span className="sjb-invalid-attachment validity-note" id="file-error-message"></span>
                            </div> 
                            <input type="hidden" name="job_id" value="5104" />
                            <input type="hidden" name="job_role" value="Senior Product designer" />
			        		<div className="banner-links">
			    				<button type="submit" value="submit" className="btn-style btn-3" id="Btn_dbl">Upload Resume</button>
			    			</div>
			        	</form>
			        </div>
			        <div id="form-messages"></div>
			    </div>
	        </div>
	        
	      </div>
	    </div>
	  </div>
      <Footer />
    </Fragment>
  );
};

export default Careers;
