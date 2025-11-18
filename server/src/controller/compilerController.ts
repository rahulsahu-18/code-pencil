import { Request, Response } from "express";
import { codeModel } from "../models/codeSchema";
import mongoose from "mongoose";
import { fullCodeType } from "../types/compilerTypes";
import { AuthRequest } from "../middleware/verifyToken";
import { User } from "../models/userSchema";

const saveCode = async (req: AuthRequest, res: Response) => {
  const body = req.body || {};
  const { fullCode, title } = body as {
    fullCode?: fullCodeType;
    title: string;
  };
  if (!fullCode) {
    return res.status(400).json({
      success: false,
      message: "fullCode is required in request body",
    });
  }

  const htmlTrimmed = fullCode.html?.trim() || "";
  const cssTrimmed = fullCode.css?.trim() || "";
  const jsTrimmed = fullCode.javascript?.trim() || "";

  if (!htmlTrimmed && !cssTrimmed && !jsTrimmed) {
    return res.status(400).json({
      success: false,
      message: "code cannot be blank !!",
    });
  }

  fullCode.html = htmlTrimmed;
  fullCode.css = cssTrimmed;
  fullCode.javascript = jsTrimmed;
  let user = undefined;
  if (req._id) {
    user = await User.findById(req._id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }
  }
  try {
    const newCode = await codeModel.create({
      fullCode: fullCode,
      title: title,
      ownerInfo: req._id,
      ownerName: user?.username,
    });
    if (user) {
      user?.savedCodes.push(newCode._id);
      await user?.save();
    }
    return res
      .status(200)
      .json({ success: true, url: newCode._id, status: "saved" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "failed while save",
      status: "unsaved",
    });
  }
};

const loadCode = async (req: Request, res: Response) => {
  try {
    const { urlId } = req.body as { urlId?: string };

    if (!urlId) {
      return res
        .status(400)
        .json({ success: false, message: "urlId is required" });
    }

    const code = await codeModel.findById(urlId);

    if (!code) {
      return res
        .status(404)
        .json({ success: false, message: "Your code was not found" });
    }

    return res.status(200).json({ success: true, allCode: code.fullCode });
  } catch (error) {
    console.error("Error while loading code:", error);
    return res.status(500).json({
      success: false,
      message: "Your code was not found",
    });
  }
};

const myCodes = async (req: AuthRequest, res: Response) => {
  const userId = req._id;

  if (!userId) {
    return res.status(401).json({ success: false, message: "Unauthorized: missing user id" });
  }

  try {
    const user = await User.findById(userId).populate("savedCodes");

    if (!user) {
      return res.status(404).json({ success: false, message: "Cannot find User!" });
    }

    return res.status(200).json( user.savedCodes);
  } catch (error) {
    console.error("Error loading my codes:", error);
    return res.status(500).json({ success: false, message: "Error loading my codes!", error });
  }
};


export { saveCode, loadCode, myCodes };
