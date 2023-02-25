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
      <div className="app__specialMenu-header flex__center">
        <SubHeading title="Menu That Fits You Palatte" />

        <h1 className="headtext__cormorant headtext">Today's Special</h1>
      </div>
      <div className="app__specialMenu-content">
        <h1 className="app__specialMenu-menu_heading">Wine & Beer</h1>
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
        <div className="app__specialMenu-img">
          <img src={images.menu} alt="" />
        </div>
        <h1 className="app__specialMenu-menu_heading">Cocktails</h1>
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
