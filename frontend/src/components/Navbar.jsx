import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoSettings, IoDiamond } from "react-icons/io5";
import GradientBar from "./GradientBar";
import NavbarItem from "./NavbarItem";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="flex flex-col sticky left-0 right-0 top-0 bottom-0 z-[999]">
      <div className="text-white flex p-5 lg:pl-[20rem] lg:pr-[20rem] justify-between items-center bg-slate-950 h-20 w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <NavLink
            to={"/"}
            className="tracking-wider font-extrabold rounded-md bg-none p-2 flex justify-center items-center text-pink-600 hover:text-white hover:bg-purple-950 duration-300"
          >
            JURNALISTIKTCR
          </NavLink>
          <div className="flex justify-center items-center gap-2">
            <div>
              <img
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="size-8 cursor-pointer object-fill bg-gradient-to-r from-pink-500 to-purple-900 rounded-full"
                src={`${
                  !user?.photo_profile &&
                  "https://firebasestorage.googleapis.com/v0/b/webjurnal-cafe5.appspot.com/o/%E2%80%94Pngtree%E2%80%94avatar%20icon%20profile%20icon%20member_5247852.png?alt=media&token=9c9d6fb1-e64b-47b1-aed3-0bd013a487bf"
                }`}
              />
              <div
                className={`${
                  !userMenuOpen ? "opacity-0" : "opacity-100"
                } transition-all p-2 flex gap-3 flex-col duration-300 absolute h-40 w-48 rounded-md bg-gray-950 drop-shadow-lg right-3.5 top-16 lg:right-[19.5rem]`}
              >
                <div>
                  <GradientBar />
                </div>
                <div className="flex h-full p-2 justify-between items-center flex-col">
                  <div className="font-light flex flex-col gap-2">
                    {user ? (
                      <span className="font-bold text-center text-yellow-500">
                        <span className="text-white">Halo,</span>{" "}
                        {!user.isAdmin && "Admin"} {user.username}
                      </span>
                    ) : (
                      <span className="font-bold text-center text-yellow-500">
                        <span className="text-white">Halo,</span> Guest
                      </span>
                    )}
                  </div>
                  <div className="transition-all duration-300 flex justify-center items-center gap-3">
                    {user ? (
                      <>
                        <IoSettings className="cursor-pointer" />

                        <span
                          onClick={logout}
                          className="cursor-pointer font-bold bg-gradient-to-r from-red-600 to-purple-900 p-2 pt-0.5 pb-0.5 text-center rounded-full"
                        >
                          Logout
                        </span>
                      </>
                    ) : (
                      <NavLink
                        onClick={() => setUserMenuOpen(false)}
                        to={"/login"}
                        className="cursor-pointer font-bold bg-gradient-to-r from-red-600 to-purple-900 p-2 pt-0.5 pb-0.5 text-center rounded-full"
                      >
                        Login
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col gap-1 cursor-pointer duration-300 transition-all ${
                navbarOpen &&
                "[&>span:nth-child(1)]:opacity-0 [&>span:nth-child(2)]:rotate-45 [&>span:nth-child(3)]:-rotate-45 [&>span:nth-child(3)]:-translate-y-1.5"
              }`}
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="h-0.5 w-5 duration-300 transition-all bg-white"></span>
              <span className="h-0.5 w-5 duration-300 transition-all bg-white"></span>
              <span className="h-0.5 w-5 duration-300 transition-all bg-white"></span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed h-fit text-lg font-bold duration-300 transition-all drop-shadow-lg top-[5.24rem] bottom-0 w-[15rem] md:w-[20rem] lg:w-[22rem] bg-slate-950 ${
          navbarOpen ? "-right-0" : "-right-96 sm:-right-[60rem]"
        }`}
      >
        <div className="flex flex-col gap-5 h-full p-5 w-full text-yellow-500">
          <NavbarItem name={"Berita Terbaru"} path={"/news"} />
          <NavbarItem name={"Tentang Kami"} path={"/about-us"} />
          <NavbarItem name={"Sekolah Kami"} path={"/news"} />
          <NavbarItem name={"News"} path={"/news"} />
        </div>
      </div>
      <GradientBar />
    </nav>
  );
};

export default Navbar;
