import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NotificationContext from "../context/NotificationContext";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        firstName,
        lastName,
        email,
        username,
        password,
        confirmPassword,
      });
      return navigate("/login", { replace: true });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <div className="flex flex-col gap-12 mt-8 justify-start p-10 items-center h-[88%] ">
      <h1 className="font-extrabold font-poppins text-4xl bg-clip-text bg-gradient-to-r text-transparent from-pink-600 to-purple-800 uppercase">
        Registrasi
      </h1>
      <div className="bg-gradient-to-r relative from-pink-700 to-purple-950 w-96 drop-shadow-2xl rounded-lg p-1 h-[40rem]">
        <form
          aria-required={true}
          onSubmit={register}
          className="flex flex-col justify-between gap-14 bg-gray-950 rounded-lg h-full p-9"
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 font-poppins">
              <label
                className="font-bold font-poppins text-xl bg-clip-text bg-gradient-to-r text-transparent from-pink-500 to-purple-950"
                htmlFor="firstName"
              >
                Nama Depan
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="firstName"
                className="text-white font-medium shadow-inner drop-shadow-2xl rounded-lg p-2 bg-gradient-to-r text-transparent from-pink-500 to-purple-950"
              />
            </div>
            <div className="flex flex-col gap-2 font-poppins">
              <label
                className="font-bold font-poppins text-xl bg-clip-text bg-gradient-to-r text-transparent from-pink-500 to-purple-950"
                htmlFor="lastName"
              >
                Nama Belakang
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                name="lastName"
                className="text-white font-medium shadow-inner drop-shadow-2xl rounded-lg p-2 bg-gradient-to-r text-transparent from-pink-500 to-purple-950"
              />
            </div>
            <div className="flex flex-col gap-2 font-poppins">
              <label
                className="font-bold font-poppins text-xl bg-clip-text bg-gradient-to-r text-transparent from-pink-500 to-purple-950"
                htmlFor="username"
              >
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                className="text-white font-medium shadow-inner drop-shadow-2xl rounded-lg p-2 bg-gradient-to-r text-transparent from-pink-500 to-purple-950"
              />
            </div>
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
            <div className="flex flex-col gap-2 font-poppins">
              <label
                className="font-bold font-poppins text-xl bg-clip-text bg-gradient-to-r text-transparent from-pink-500 to-purple-950"
                htmlFor="confirmPassword"
              >
                Konfirmasi Password
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="confirmPassword"
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
              Daftar
            </button>
            <p className=" text-center font-light font-poppins text-xl bg-clip-text bg-gradient-to-r text-transparent from-pink-500 to-purple-950">
              Sudah punya akun? <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
