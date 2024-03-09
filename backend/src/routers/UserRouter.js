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
import { isAdmin } from '../middleware/isAdmin.js';
import { changePhotoProfile } from "../controllers/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/users", verifyToken, isAdmin, getUsers);
UserRouter.patch('/users', verifyToken, changePhotoProfile)
UserRouter.post("/users", registerUser);
UserRouter.post("/login", login);
UserRouter.get("/token", refreshToken);
UserRouter.delete("/logout", logout);

export default UserRouter;
