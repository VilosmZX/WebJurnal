import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";

import Users from "./models/UserModel.js";
import Banners from "./models/BannerModel.js";

import UserRouter from "./routers/UserRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

(async () => {
  try {
    await db.authenticate();
    await Users.sync();
    await Banners.sync();

    console.log("Database connected successfuly!");

    // Jika database berhasi l terhubung
    app.use(cookieParser());
    app.use(express.json());
    app.use(
      cors({
        credentials: true,
        origin: "http://localhost:5173",
      })
    );

    // Routers
    app.use(UserRouter);

    app.listen(5000, () => console.log("Server is online!"));
  } catch (error) {
    console.error(error);
  }
})();
