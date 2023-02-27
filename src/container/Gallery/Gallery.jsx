import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./Gallery.css";
import images from "../../constants/images";
import { SubHeading } from "../../components";
import data from "../../constants/data";
const Gallery = () => (
  <div className="section__padding bg__black">
    <div className="app__gallery-container">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo gallery</h1>
        <p className="p__opensans" style={{ color: "#AAAAAA" }}>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </p>
        <button className="custom__button">View More</button>
      </div>
      <div className="gallery-images">
        {data.gallery.map((images) => {
          return (
            <div className="gallery-img">
              <img src={images.img} alt="" />
              <BsInstagram className="gallery-img-icon" />
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default Gallery;
