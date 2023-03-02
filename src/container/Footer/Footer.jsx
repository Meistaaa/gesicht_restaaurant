import React from "react";
import { FooterOverlay, Newsletter, SubHeading } from "../../components";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import images from "../../constants/images";
const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-content">
      <div className="flex__center direction-col">
        <h1 className="subheading">Contact us</h1>

        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="flex__center direction-col">
        <h1 className="headtext__cormorant">GERICHT</h1>
        <div
          className="flex__center direction-col"
          style={{ marginBottom: "1rem" }}
        >
          <p className="p__opensans" style={{ marginBottom: "1rem" }}>
            "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
            Others.”
          </p>
          <img src={images.spoon} alt="spoon_image" className="spoon__img" />
        </div>
        <div className="footer-icons">
          <FaInstagram className="footer-icon"></FaInstagram>
          <FaFacebook className="footer-icon"></FaFacebook>
          <FaTwitter className="footer-icon"></FaTwitter>
        </div>
      </div>
      <div className="flex__center direction-col">
        <h1 className="subheading">Working Hours</h1>

        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 Am -12:00 Am</p>

        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00am -11:00 Pm</p>
      </div>
    </div>
    <p className="p__opensans" style={{ color: "#AAAAAA" }}>
      2022 Gerícht. All Rights Reserved.
    </p>
  </div>
);

export default Footer;
