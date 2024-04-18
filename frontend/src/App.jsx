import { useContext, useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import { NotificationContextProvider } from "./context/NotificationContext.jsx";
import UserContextProvider, { UserContext } from "./context/UserContext.jsx";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer.jsx";
import ParticlesComponent from "./config/particles.jsx";

function App() {
  return (
    <>
    <div className="tracking-wideh-[100vh]">
      <Helmet>
        <title>Jurnalistik TCR</title>
      </Helmet>
      <UserContextProvider>
        <NotificationContextProvider>
          <ParticlesComponent id={'particles'}/>
          <Navbar />
          <Outlet />
          <Footer />
        </NotificationContextProvider>
      </UserContextProvider>
    </div>
    </>
  );
}

export default App;
