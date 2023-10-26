import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function authenticateUser(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  // const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Authorization token required" });
  }

  try {
    console.log("Token:", token);
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    // console.error(error);
    res.status(401).json({ message: "Invalid token" });
  }
}
