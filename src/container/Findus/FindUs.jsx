import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title={"Contact"} />
      <h1 className="headtext__cormorant">Find us</h1>
      <p className="p__opensans">
        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
      </p>
      <p className="p__cormorant" style={{ margin: "2rem 0" }}>
        Opening Hours
      </p>
      <div style={{ margin: "0 0 3rem   0" }}>
        <p className="p__opensans">Mon - Fri: 10:00 Am - 02:00 Am</p>
        <p className="p__opensans"> Sat - Sun: 10:00 Am - 03:00 Am</p>
      </div>
      <button type="button" className="custom__button">
        View Us
      </button>
    </div>
    <div className="app__wrapper_img ">
      <img src={images.findus} alt="" />
    </div>
    <div>HASEEB</div>
  </div>
);

export default FindUs;
