import React, { useContext } from "react";
import Carousel from "../components/Carousel";
import { UserContext } from "../context/UserContext";
import LatestPosts from "../components/LatestPosts";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="text-yellow-500 flex flex-col gap-5">
      <Carousel />
      <LatestPosts />
      {user?.isAdmin && (
        <div className="fixed right-12 bottom-32 size-10 flex justify-center items-center cursor-pointer bg-slate-900 rounded-full p-2">
          <Link to={'/post'}><IoAdd className="text-white duration-300 hover:rotate-45" /></Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
