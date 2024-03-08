import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Carousel = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-center">
      <div className="h-[22rem] bg-slate-900 w-full rounded-lg drop-shadow-2xl">
        <img
          className="object-cover h-full w-full"
          src="https://media1.tenor.com/m/cHXf2CRshxAAAAAC/new-year.gif"
        />
      </div>
    </div>
  );
};

export default Carousel;
