import React, { Fragment } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/AboutUs.css";
import protection  from "../assets/Home/protection.svg";
const AboutUs = () => {
  return (
    <Fragment>
      <NavBar />
      <section className="bannerabt-sec">
        <div className="container text-light ">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5 col-md-12 col-12">
              <h1 className="txt-1">
                Product Design, Manufacturing, R&D and Automation
              </h1>
              <h3 className="txt-3 py-3">
                We are a Product Engineering and Licensing company.
              </h3>
            </div>
          </div>
          <h3 className="align-items-center">
            <i className="fw-bold">
              <blockquote>Engineered by the laws of Physics. </blockquote>
            </i>
          </h3>
        </div>
      </section>

      <section className="we-do-it-sec py-5">
    	<div className="container-fluid">
    		<div className="row align-items-center">
    			<div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
    				<h2 className="txt-2 pt-2 pb-5">WE DO IT ALL</h2>
    			</div>

	    			<div className="col-xl-3 col-lg-3 col-md-6 col-12 we-design">
	    				<a href="#">
		    				<div className="we-design-main we-1">
		    					<h3 className="pb-3">DESIGN</h3>
		    				</div>
		    			</a>
	    			</div>
	    			<div className="col-xl-3 col-lg-3 col-md-6 col-12 we-design">
	    				<a href="#">
		    				<div className="we-design-main we-2">
		    					<h3 className="pb-3">MANUFACTURING</h3>
		    				</div>
		    			</a>
	    			</div>
	    			<div className="col-xl-3 col-lg-3 col-md-6 col-12 we-design">
	    				<a href="#">
		    				<div className="we-design-main we-3">
		    					<h3 className="pb-3">R&D</h3>
		    				</div>
		    			</a>
	    			</div>
	    			<div className="col-xl-3 col-lg-3 col-md-6 col-12 we-design">
	    				<a href="#">
		    				<div className="we-design-main we-4">
		    					<h3 className="pb-3">AUTOMATION</h3>
		    				</div>
		    			</a>
	    			</div>
    			
    		</div>
    	</div>
    </section>

    <section className="approach-sec pb-5">
    	<div className="container">
    		<div className="row align-items-center text-center">
    			<div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
    				<h2 className="txt-2">Our Approach</h2>
    				<p className="txt-3-dp pt-3 pb-5">We follow a defined protocol to ensure that our idea flows<br />through trajectory to become a one of a kind product</p>
    				<div className="col-xl-12 col-lg-12 col-md-12 col-12">
    					<div className="app-main">
		    				<div className="app-box py-3 py-md-5">
		    					<img src={protection} loading="lazy" />
		    					<h3 className="txt-2">Define</h3>
		    					<div className="right-arrow"></div>
		    				</div>
		    				<div className="app-box py-3 py-md-5">
		    					<img src={protection} loading="lazy" />
		    					<h3 className="txt-2">Plan</h3>
		    					<div className="right-arrow"></div>
		    				</div>
		    				<div className="app-box py-3 py-md-5">
		    					<img src={protection} loading="lazy" />
		    					<h3 className="txt-2">Build</h3>
		    				</div>
		    			</div>
	    			</div>
	    			<div className="col-xl-12 col-lg-12 col-md-12 col-12 pt-5">
    					<div className="app-main">
		    				<div className="app-box py-3 py-md-5">
		    					<img src={protection} loading="lazy" />
		    					<h3 className="txt-2">Evaluate</h3>
		    					<div className="right-arrow"></div>
		    				</div>
		    				<div className="app-box py-3 py-md-5">
		    					<img src={protection} loading="lazy" />
		    					<h3 className="txt-2">Iterate</h3>
		    					<div className="right-arrow"></div>
		    				</div>
		    				<div className="app-box py-3 py-md-5">
		    					<img src={protection} loading="lazy" />
		    					<h3 className="txt-2">Goal</h3>
		    				</div>
		    			</div>
	    			</div>
	    			<p className="txt-3-dp pt-5">We accept and encourage adjustments to our approach<br /> and are happy to go back to the drawing board at any<br /> point in the process.</p>
    			</div>
	    			

    		</div>
    	</div>
    </section>

      <Footer />
    </Fragment>
  );
};

export default AboutUs;
