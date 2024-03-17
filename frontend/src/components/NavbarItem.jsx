import React from "react";
import { NavLink } from "react-router-dom";

const NavbarItem = ({ name, path }) => {
  return (
    <div>
      <NavLink
        className={"hover:text-white duration-300 transition-all"}
        to={path}
      >
        {name}
      </NavLink>
      <div
        className={`bg-white h-1 bg-gradient-to-r from-blue-600 to-blue-400`}
      ></div>
    </div>
  );
};

export default NavbarItem;
