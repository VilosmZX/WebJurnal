import React, { useEffect, useState } from "react";
import Post from "./Post";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import axios from "axios";

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const data = (await axios.get('http://localhost:5000/posts')).data;
    setPosts(data);
  }

  return (
    <div className="flex gap-y-5 flex-col relative flex-1 flex-wrap p-5 w-full h-full mb-20 font-roboto">
      {posts.map((post) => (
        <div className="flex hover:opacity-80 cursor-pointer duration-300 flex-col justify-between h-[10rem] opacity-90 rounded-2xl bg-slate-900 w-full shadow-2xl">
          <div className="flex justify-between h-full">
            <div className="flex-1 p-2 h-full scrollbar-hide overflow-hidden">
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-3">
                  <h1 className="font-bold text-white text-2xl">{post.title}</h1>
                  <small dangerouslySetInnerHTML={{__html: post.content}} className="text-xl font-extralight text-white line-clamp-2 scrollbar-hide"></small>
                </div>
                <div className="text-slate-200 flex w-full justify-between">
                  <span>{new Date(post.createdAt).toLocaleDateString('id-ID')}</span>
                  <span>Di upload oleh @{post.user.username}</span>
                </div>
              </div>
            </div>
            <img 
              src={post.banner}
              className="object-cover size-20 h-full w-[10rem] md:w-[15rem]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestPosts;
