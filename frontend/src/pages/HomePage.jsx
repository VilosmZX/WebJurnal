import React, { useContext } from "react";
import Carousel from "../components/Carousel";
import { UserContext } from "../context/UserContext";

const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="text-yellow-500">
      <Carousel />
      <div>
        <span>Welcome back: {user?.username}</span>
      </div>
    </div>
  );
};

export default HomePage;
