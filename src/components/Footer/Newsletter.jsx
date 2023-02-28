import React from "react";
import SubHeading from "../SubHeading/SubHeading";

import "./Newsletter.css";

const Newsletter = () => (
  <div className=" app__newsletter">
    <SubHeading title={"Newsletter"} />
    <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
    <p className="p__opensans" style={{ color: "#545454" }}>
      And Never Miss Lastest Updates!
    </p>
    <div className="app__newsletter-input">
      <input type="email" placeholder="Enter Your Email Address" />
      <button className="custom__button" type="button" >Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
