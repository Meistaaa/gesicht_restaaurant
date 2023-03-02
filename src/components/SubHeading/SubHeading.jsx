import React from "react";
import images from "../../constants/images";
const SubHeading = ({ title }) => (
  <div  style={{ marginBottom: "1rem" }}>
    <p className="p__subheading-text">{title}</p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
