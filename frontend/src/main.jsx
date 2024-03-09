import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";
import Users from "./components/AdminPanel/Users.jsx";
import Banners from "./components/AdminPanel/Banners.jsx";
import Posts from "./components/AdminPanel/Posts.jsx";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        element: <AdminRoutes />,
        children: [
          {
            path: '/admin',
            element: <AdminPage />,
            children: [
              {
                path: 'users',
                element: <Users />
              },
              {
                path: 'banners',
                element: <Banners />
              },
              {
                path: 'posts',
                element: <Posts />
              },
              
            ]
          }
        ]
      },
      {
        path: '/settings',
        element: <AuthenticatedRoutes />,
        children: [
          {
            index: true,
            element: <SettingsPage />
          }
        ]
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
