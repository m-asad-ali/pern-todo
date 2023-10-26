import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// User registration (signup)
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if the user with the given email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "This email is already associated with an account." });
    }

    // Hash the password
    const saltRounds = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the new user in the database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    // Generate a JWT token for the user
    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_KEY, {
      expiresIn: "1d",
    });

    // Respond with the token
    res.status(201).json({
      user: newUser,
      token: token,
      message: "User created succesfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// User login
const loginUser = async (req, res) => {};

// User logout (signout)
const logoutUser = (req, res) => {};

// User validation
const validateUser = async (req, res) => {};

export { registerUser, loginUser, logoutUser, validateUser };
