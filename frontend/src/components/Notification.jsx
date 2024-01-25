import React from "react";
import { IoNotificationsCircle } from "react-icons/io5";

const Notification = ({ msg }) => {
  return (
    <>
      <div className="absolute transition-all duration-500 -right-3 -top-3">
        <IoNotificationsCircle className="text-black transition-all duration-500 size-6 bg-gradient-to-r rounded-full from-pink-600 to-blue-700" />
      </div>
      <span className="text-slate-900 break-words font-semibold transition-all duration-500">
        {msg}
      </span>
    </>
  );
};

export default Notification;
