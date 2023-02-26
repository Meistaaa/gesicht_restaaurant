import React from "react";
import data from "../../constants/data";
import "./Laurels.css";
import images from "../../constants/images";
import { SubHeading } from "../../components";
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels-awards-content">
    <img src={imgUrl} alt="" />
    <div>
      <h1 className="p__cormorant">{title}</h1>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);
const Laurels = () => (
  <div className="section__padding app__laurels app__bg">
    <div className="app__laurel-logo">
      <img src={images.logo} alt="" />
    </div>
    <div className=" app__laurels-container">
      <div>
        <SubHeading title={"Awards & Recognition"} />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels-awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="">
        <img className="app__wrapper_img" src={images.laurels} alt="" />
      </div>
    </div>
  </div>
);

export default Laurels;
