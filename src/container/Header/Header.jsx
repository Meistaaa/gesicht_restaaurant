import React from "react";

import "./Header.css";
import images from "../../constants/images";
import { SubHeading } from "../../components";
const Header = () => (
  <div className="section__padding app__header">
    <div className="app__header-container">
      <div className="app__header-content">
        <SubHeading title="Chase the new flavour" />

        <h1 className="  app__header-heading">The Key To Fine Dining</h1>
        <p className="p__opensans  ">
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
          Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
          Aliquam Amet Tellus
        </p>
        <button className="custom__button">Explore Menu</button>
      </div>
      <div>
        <img className="app__header-img" src={images.welcome} alt="" />
      </div>
    </div>
  </div>
);

export default Header;

