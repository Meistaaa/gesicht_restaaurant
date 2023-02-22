import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";
import images from "../../constants/images";
const Navbar = () => (
  <div className="app__navbar">
    <div className="app__navbar-logo">
      <img className="app__navbar-image" src={images.gericht} alt="gericht" />
    </div>
    <div className="app__links ">
      <a className="p__opensans" href="#home">
        Home
      </a>
      <a className="p__opensans" href="#About">
        About
      </a>
      <a className="p__opensans" href="Menu">
        Menu
      </a>
      <a className="p__opensans" href="Awards">
        Awards
      </a>
      <a className="p__opensans" href="Contact">
        Contact
      </a>
    </div>
    <div className="app__navbar-login">
      <a href="#Login" className="p__opensans " type="button">
        Login / Register
      </a>
      <p className="vertical-line"></p>
      <a href="#Booking" className="p__opensans " type="button">
        Book Table
      </a>
    </div>
  </div>
);

export default Navbar;
