import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitems ">
    <div className="app__menuitems-content">
      <div className="app__menuitems-tag">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="p__opensans " style={{ color: "#AAAAAA" }}>
          { tags }
        </p>
      </div>

      <div className="app__menuitems-price">
        <p className="app__menuitems-dash"></p>
        <p className=" p__opensans">{price}</p>
      </div>
    </div>
  </div>
);

export default MenuItem;
