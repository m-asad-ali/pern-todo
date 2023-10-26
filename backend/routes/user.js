// src/routes/user.js
import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  validateUser,
} from "../controllers/userController.js";

const routerUser = express.Router();

routerUser.post("/register", registerUser);
routerUser.post("/login", loginUser);
routerUser.post("/logout", logoutUser);
routerUser.get("/validate", validateUser);

export default routerUser;
