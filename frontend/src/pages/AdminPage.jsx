import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  const [tab, setTab] = useState(0);

  const activeNavbar = "underline transition-all duration-300 ease-in-out";

  return (
    <div className="text-white m-5 mt-10">
      <div className="flex gap-2 h-[80vh]">
        <div className="bg-gradient-to-br from-blue-600 to-blue-400 shadow-2xl rounded-lg p-1.5 w-[20%]">
          <div className="flex flex-col gap-5">
            <NavLink
              className={({ isActive }) => (isActive ? activeNavbar : "")}
              to={"users"}
            >
              Users
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeNavbar : "")}
              to={"banners"}
            >
              Banners
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeNavbar : "")}
              to={"posts"}
            >
              Posts
            </NavLink>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
