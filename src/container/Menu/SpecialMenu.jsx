import React, { useState } from "react";
import { SubHeading } from "../../components";
import MenuItem from "../../components/Menuitem/MenuItem";

import "./SpecialMenu.css";
import images from "../../constants/images";
import data from "../../constants/data";
const SpecialMenu = () => {
  const [menudata, setMenudata] = useState(data);
  return (
    <div className="section__padding bg__black">
      <div>
        <SubHeading title="Menu That Fits You Palatte" />
        <h1 className="p__opensans">Today's Special</h1>
      </div>
      <div className="app__specialMenu-content">
        <div>
          {menudata.wines.map((menu) => {
            return (
              <MenuItem
                title={menu.title}
                tags={menu.tags}
                price={menu.price}
              />
            );
          })}
        </div>
        
        <div>
          {menudata.cocktails.map((menu) => {
            return (
              <MenuItem
                title={menu.title}
                tags={menu.tags}
                price={menu.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
