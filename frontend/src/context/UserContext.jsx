import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    refreshToken();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      refreshToken();
    }, 1000 * 10);
    return () => clearInterval(intervalId);
  }, []);

  const logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      return navigate(0);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      const decoded_data = jwtDecode(response.data.accessToken);
      if (!decoded_data.photo_profile) {
        decoded_data.photo_profile = "https://firebasestorage.googleapis.com/v0/b/webjurnal-cafe5.appspot.com/o/%E2%80%94Pngtree%E2%80%94avatar%20icon%20profile%20icon%20member_5247852.png?alt=media&token=9c9d6fb1-e64b-47b1-aed3-0bd013a487bf"
      } else {
        
      }
      console.log('KONTOL');
      setUser(decoded_data);
    } catch (error) {
      setUser({});
    }
  };

  const getToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      return response.data.accessToken;
    } catch (error) {
      setUser({})
    }
  };
  
  const data = {
    user,
    setUser,
    logout,
    getToken,
  };

  return (
    <UserContext.Provider value={data}>{user && children}</UserContext.Provider>
  );
};

export default UserContextProvider;
