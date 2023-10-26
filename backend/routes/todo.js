import { Router } from "express";
import {
  createTodo,
  updateTodo,
  completeTodo,
  deleteTodo,
} from "../controllers/todoController.js";

const routerTodo = Router();

routerTodo.post("/create", createTodo);
routerTodo.put("/update/:id", updateTodo);
routerTodo.put("/complete/:id", completeTodo);
routerTodo.delete("/delete/:id", deleteTodo);

export default routerTodo;
