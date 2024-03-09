import React, { createContext, useState, useEffect } from "react";
import Notification from "../components/Notification";

const NotificationContext = createContext(null);

export const NotificationContextProvider = ({ children }) => {
  const [queueNotifications, setQueueNotifications] = useState([]);

  const data = {
    queueNotifications,
    setQueueNotifications,
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQueueNotifications([
        ...queueNotifications.filter(
          (value, idx) => idx !== queueNotifications.length - 1
        ),
      ]);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [queueNotifications]);

  return (
    <NotificationContext.Provider value={data}>
      <div
        className={`${
          queueNotifications.length ? "bottom-10" : "-bottom-[999px]"
        } duration-1000 transition-all p-3 fixed flex flex-col gap-2 text-wrap right-10 h-fit w-fit max-w-60 drop-shadow-lg rounded-md bg-white z-[99]`}
      >
        <Notification msg={queueNotifications[queueNotifications.length - 1]} />
      </div>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
