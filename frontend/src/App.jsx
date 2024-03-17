import { useContext, useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import { NotificationContextProvider } from "./context/NotificationContext.jsx";
import UserContextProvider, { UserContext } from "./context/UserContext.jsx";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="tracking-wide bg-gray-900 h-[115vh] md:h-[100vh] lg:h-[120vh]">
      <Helmet>
        <title>Jurnalistik TCR</title>
      </Helmet>
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
