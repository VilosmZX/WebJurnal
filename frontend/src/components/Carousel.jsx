import React, { useEffect, useState } from "react";
import axios from "axios";


const Carousel = () => {
  const [banner, setBanner] = useState('');

  useEffect(() => {
    getBanner();
  })

  const getBanner = async () => {
    const response = await axios.get('http://localhost:5000/current-banner');
    setBanner(response.data.image);
  }

  return (
    <div className="flex justify-center">
      <div className="md:h-[20rem] w-full rounded-lg shadow-2xl drop-shadow-2xl">
        <img
          loading="lazy"
          className="object-cover h-full w-full opacity-90 rounded-lg"
          src={banner}
        />
      </div>
    </div>
  );
};

export default Carousel;
