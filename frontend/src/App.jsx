import { useContext, useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import { NotificationContextProvider } from "./context/NotificationContext.jsx";
import UserContextProvider, { UserContext } from "./context/UserContext.jsx";

function App() {
  return (
    <div className="tracking-wide bg-gray-900 w-screen h-screen">
      <UserContextProvider>
        <NotificationContextProvider>
          <Navbar />
          <Outlet />
        </NotificationContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
