import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// get all todos
const getAllTodos = async (req, res) => {
  try {
    const userId = req.user.userId;
    const todos = await prisma.todo.findMany({
      where: {
        userId: userId,
      },
    });
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// create new todo
const createTodo = async (req, res) => {
  try {
    const { title, description, dueDate, userId } = req.body;
    const newTodo = await prisma.todo.create({
      data: {
        title,
        description,
        dueDate,
        userId,
      },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error!" });
  }
};

// update existing todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate } = req.body;

    // Find the TODO by ID
    const todoToUpdate = await prisma.todo.findUnique({
      where: { id: parseInt(id) },
    });

    // Check if the TODO exists
    if (!todoToUpdate) {
      return res.status(404).json({ error: "Task not found" });
    }

    // Check if the authenticated user is the owner of the TODO
    if (todoToUpdate.userId !== req.user.userId) {
      return res
        .status(403)
        .json({ error: "You do not have permission to update this TODO" });
    }

    // Update the TODO
    const updatedTodo = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        dueDate,
      },
    });

    res.json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// complete todo
const completeTodo = async (req, res) => {
  try {
    const { id } = req.params;
    // Find the TODO by ID
    const todoToComplete = await prisma.todo.findUnique({
      where: { id: parseInt(id) },
    });

    // Check if the TODO exists
    if (!todoToComplete) {
      return res.status(404).json({ error: "Task not found" });
    }

    // Check if the authenticated user is the owner of the TODO
    if (todoToComplete.userId !== req.user.userId) {
      return res
        .status(403)
        .json({ error: "You do not have permission to access this TODO" });
    }

    const completedTodo = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: {
        completed: true,
      },
    });
    res.json(completedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// delete todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    // Find the TODO by ID
    const todoToDelete = await prisma.todo.findUnique({
      where: { id: parseInt(id) },
    });

    // Check if the TODO exists
    if (!todoToDelete) {
      return res.status(404).json({ error: "Task not found" });
    }

    // Check if the authenticated user is the owner of the TODO
    if (todoToDelete.userId !== req.user.userId) {
      return res
        .status(403)
        .json({ error: "You do not have permission to access this TODO" });
    }

    await prisma.todo.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllTodos, createTodo, updateTodo, completeTodo, deleteTodo };
