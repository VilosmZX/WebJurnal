import React, { useContext } from "react";
import Carousel from "../components/Carousel";
import { UserContext } from "../context/UserContext";
import LatestPosts from "../components/LatestPosts";

const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="text-yellow-500 flex flex-col gap-5">
      <Carousel />
      <LatestPosts />
    </div>
  );
};

export default HomePage;
