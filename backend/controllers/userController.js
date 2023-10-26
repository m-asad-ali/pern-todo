import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// User registration (signup)
const registerUser = async (req, res) => {};

// User login
const loginUser = async (req, res) => {};

// User logout (signout)
const logoutUser = (req, res) => {};

// User validation
const validateUser = async (req, res) => {};

export { registerUser, loginUser, logoutUser, validateUser };
