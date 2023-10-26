import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// create new todo
const createTodo = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const newTodo = await prisma.todo.create({
      data: {
        title,
        description,
        dueDate,
      },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// update existing todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate } = req.body;
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
    await prisma.todo.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { createTodo, updateTodo, completeTodo, deleteTodo };
