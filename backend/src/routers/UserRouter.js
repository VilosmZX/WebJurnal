import Users from "../models/UserModel.js";
import express from "express";
import {
  getUsers,
  registerUser,
  login,
  refreshToken,
  logout,
} from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const UserRouter = express.Router();

UserRouter.get("/users", verifyToken, getUsers);
UserRouter.post("/users", registerUser);
UserRouter.post("/login", login);
UserRouter.get("/token", refreshToken);
UserRouter.delete("/logout", logout);

export default UserRouter;
