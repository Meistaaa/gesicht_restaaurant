import React from "react";

import "./AboutUs.css";
import images from "../../constants/images";
const AboutUs = () => (
  <div className="section__padding app__about-us app__bg">
    <div className="app__about-bg-img flex__center">
      <img src={images.G} alt="" />
    </div>
    <div className="app__about-content flex__center">
      <div className="app__about-content-about">
        <div className="app__about-content-about-heading">
          <h1 className="headtext__cormorant">About </h1>
          <img className="spoon__img" src={images.spoon} alt="" />
        </div>

        <p className="app__about-content-p  app__about-content-about-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className=" app__about-content-img">
        <img src={images.knife} alt="" />
      </div>
      <div className="app__about-content-history">
        <div className="app__about-content-history-heading">
          <h1 className="headtext__cormorant">Our History </h1>
          <img className="spoon__img" src={images.spoon} alt="" />
        </div>

        <p className="app__about-content-p  app__about-content-history-p ">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
