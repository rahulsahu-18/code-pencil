import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";

export interface AuthRequest extends Request {
  _id?: string;
}

export const verifyToken = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send({ message: "You are unauthorized." });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as
      | jwt.JwtPayload
      | { _id?: string; id?: string };
    req._id = (payload as any)._id ?? (payload as any).id;

    if (!req._id) {
      return res.status(401).send({ message: "You are unauthorized." });
    }

    next();
    return;
  } catch (err) {
    return res.status(401).send({ message: "You are unauthorized." });
  }
};