import { Router } from "express";
import {
  getAllTodos,
  createTodo,
  updateTodo,
  completeTodo,
  deleteTodo,
} from "../controllers/todoController.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";

const routerTodo = Router();

routerTodo.get("/all", authenticateUser, getAllTodos);
routerTodo.post("/create", authenticateUser, createTodo);
routerTodo.put("/update/:id", authenticateUser, updateTodo);
routerTodo.put("/complete/:id", authenticateUser, completeTodo);
routerTodo.delete("/delete/:id", authenticateUser, deleteTodo);

export default routerTodo;
