import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";

const routerUser = express.Router();

routerUser.post("/register", registerUser);
routerUser.post("/login", loginUser);
routerUser.post("/logout", logoutUser);

export default routerUser;
