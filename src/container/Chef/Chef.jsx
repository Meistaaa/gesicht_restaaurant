import React from "react";

import "./Chef.css";
import images from "../../constants/images";
import { SubHeading } from "../../components";
const Chef = () => (
  <div className=" section__padding app__bg">
    <div className="app__wrapper">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="" />
      </div>
      <div className="app__wrapper_info">
        <div className="app__wrapper_info-content">
          <SubHeading title="Chef's Word" />
          <h1 className="headtext__cormorant">What We Believe In</h1>
        </div>
        <div className="app__wrapper-quote-container">
          <div className="app__wrapper-quote">
            <img src={images.quote} alt="" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur qui modi iste consequuntur.
            </p>
          </div>
          <p className="p__opensans">
            {" "}
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.{" "}
          </p>
        </div>
        <div>
          <h1 className="headtext__cormorant">Kevin Luo</h1>
          <p>Chef & Founder</p>
        </div>
        <div>
          <img src={images.sign} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
