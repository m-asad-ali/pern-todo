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

    //geting username on own
    const myUserName = email.split("@")[0];

    // Create the new user in the database
    const newUser = await prisma.user.create({
      data: {
        username: myUserName,
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
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user with the given email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) return res.status(400).json({ error: "User Not Found" });

    // Check password
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch)
      return res.status(400).json({ error: "Invalid Password" });

    // const tokenData = {
    //   id: existingUser.id,
    //   username: existingUser.username,
    //   email: existingUser.email,
    // };

    // Generate a JWT token for the user
    const token = jwt.sign({ userId: existingUser.id }, process.env.JWT_KEY, {
      expiresIn: "1d",
    });

    // Respond with the token
    res.status(201).json({
      user: existingUser,
      token: token,
      message: "User Sign-in succesfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// User logout (signout)
const logoutUser = (req, res) => {};

export { registerUser, loginUser, logoutUser };
