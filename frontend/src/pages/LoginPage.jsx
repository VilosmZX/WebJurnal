import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NotificationContext from "../context/NotificationContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setQueueNotifications} = useContext(NotificationContext);

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      navigate("/", { replace: true });
      navigate(0);
    } catch (error) {
      if (error.response) {
        setQueueNotifications([error.response.data.msg]);
      }
    }
  };

  return (
    <div className="flex flex-col gap-12 mt-8 justify-start p-10 items-center ">
      <h1 className="font-extrabold font-poppins text-4xl bg-clip-text bg-gradient-to-r text-transparent from-pink-600 to-purple-800 uppercase">
        Login
      </h1>
      <div className="bg-gradient-to-r relative from-pink-700 to-purple-950 w-96 drop-shadow-2xl rounded-lg p-1 h-fit">
        <form
          aria-required={true}
          onSubmit={login}
          className="flex flex-col justify-between gap-14 bg-gray-950 rounded-lg h-full p-9"
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 font-poppins">
              <label
                className="font-bold font-poppins text-xl bg-clip-text bg-gradient-to-r text-transparent from-pink-500 to-purple-950"
                htmlFor="email"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="text-white font-medium shadow-inner drop-shadow-2xl rounded-lg p-2 bg-gradient-to-r text-transparent from-pink-500 to-purple-950"
              />
            </div>
            <div className="flex flex-col gap-2 font-poppins">
              <label
                className="font-bold font-poppins text-xl bg-clip-text bg-gradient-to-r text-transparent from-pink-500 to-purple-950"
                htmlFor="password"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                className="text-white font-medium shadow-inner drop-shadow-2xl rounded-lg p-2 bg-gradient-to-r text-transparent from-pink-500 to-purple-950"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full h-full">
            <button
              className="bg-gradient-to-r w-full p-1.5 shadow-lg rounded-full from-pink-500 to-purple-950"
              type="submit"
            >
              Login
            </button>
            <p className=" text-center font-light font-poppins text-xl bg-clip-text bg-gradient-to-r text-transparent from-pink-500 to-purple-950">
              Belum Punya Akun? <Link to={"/register"}>Daftar</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
