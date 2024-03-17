import React from "react";
import Post from "./Post";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const LatestPosts = () => {
  return (
    <div className="flex gap-2 relative items-center justify-between">
      <AiOutlineLeft />
      <Post />
      <AiOutlineRight/>
    </div>
  );
};

export default LatestPosts;
