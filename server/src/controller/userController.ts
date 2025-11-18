import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { AuthRequest } from "../middlewares/verifyToken";
import { User } from "../models/userSchema";
import { AuthRequest } from "../middleware/verifyToken";

interface SignupBody {
  username: string;
  email: string;
  password: string;
}

interface loginBody {
  userId: string;
  password: string;
}

export const signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body as SignupBody;
  const usernameRegex = /^[a-zA-Z0-9]+$/;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!usernameRegex.test(username)) {
      return res
        .status(400)
        .json({ message: "Some characters are not allowed!" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with same email!" });
    }
    const existingUserbyUsername = await User.findOne({ username });
    if (existingUserbyUsername) {
      return res
        .status(400)
        .json({ message: "username alredy exist with same username" });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      email,
      password: hashedPassword,
      username,
    });

    if (!process.env.JWT_KEY) {
      throw new Error("JWT_KEY not set");
    }

    const jwtToken = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_KEY,
      { expiresIn: "7d" }
    );

    res.cookie("token", jwtToken, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
      sameSite: "lax",
    });

    return res.status(201).json({
      username: user.username,
      picture: user.picture,
      email: user.email,
      savedCodes: user.savedCodes,
    });
  } catch (error: any) {
    return res.status(500).send({ message: "Error signing up!", error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { userId, password } = req.body as loginBody;

  try {
    if (!userId || !password) {
      return res.status(400).json({ message: "Missing credentials" });
    }

    const existingUser = userId.includes("@")
      ? await User.findOne({ email: userId })
      : await User.findOne({ username: userId });

    if (!existingUser) {
      return res.status(400).json({ message: "User not found" });
    }

    const passwordMatched = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatched) {
      return res.status(400).json({ message: "Wrong password" });
    }

    if (!process.env.JWT_KEY) {
      throw new Error("JWT_KEY not set");
    }

    const jwtToken = jwt.sign(
      {
        _id: existingUser._id,
        email: existingUser.email,
      },
      process.env.JWT_KEY,
      { expiresIn: "7d" }
    );

    res.cookie("token", jwtToken, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
      sameSite: "lax",
    });

    return res.status(200).json({
      username: existingUser.username,
      picture: existingUser.picture,
      email: existingUser.email,
      savedCodes: existingUser.savedCodes,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).send({ message: "Error logging in!", error: error.message });
    }
    return res.status(500).send({ message: "Unexpected error!", error });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token");
    return res.status(200).send({ message: "logged out successfully!" });
  } catch (error) {
    return res.status(500).send({ message: "Error logging out!", error });
  }
};

export const userDetials = async (req: AuthRequest, res: Response) => {
  const userId = req._id;

  try {
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized: missing user id" });
    }

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).send({
      username: user.username,
      picture: user.picture,
      email: user.email,
      savedCodes: user.savedCodes,
    });
  } catch (error) {
    return res.status(500).json({ message: "Cannot fetch user details", error });
  }
}

