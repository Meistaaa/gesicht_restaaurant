import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./Gallery.css";
import { SubHeading } from "../../components";
import data from "../../constants/data";
const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      if (direction === "left") {
        const scrollLeft = isNaN(scrollRef.current.scrollLeft)
          ? 0
          : scrollRef.current.scrollLeft;
        scrollRef.current.scrollLeft = scrollLeft - 300;
      } else {
        const scrollLeft = isNaN(scrollRef.current.scrollLeft)
          ? 0
          : scrollRef.current.scrollLeft;
        scrollRef.current.scrollLeft = scrollLeft + 300;
        console.log(scrollRef.current.scrollRight);
      }
    }
  };
  return (
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
        <div className="app__gallery-images">
          <div className="gallery-images" ref={scrollRef}>
            {data.gallery.map((images) => {
              return (
                <div className="gallery-img" key={images.id}>
                  <img src={images.img} alt="" />
                  <BsInstagram className="gallery-img-icon" />
                </div>
              );
            })}
          </div>
          <div className="app__gallery-img-arrows">
            <BsArrowLeftShort
              className="app__gallery-arrows-icons"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="app__gallery-arrows-icons"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
