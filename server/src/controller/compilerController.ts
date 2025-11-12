import { Request, Response } from "express";
import { codeModel } from "../models/codeSchema";
import mongoose from "mongoose";
import { fullCodeType } from "../types/compilerTypes";

const saveCode = async (req: Request, res: Response) => {
  const body = req.body || {};
  const { fullCode } = body as { fullCode?: fullCodeType };
  if (!fullCode) {
    return res
      .status(400)
      .json({
        success: false,
        message: "fullCode is required in request body",
      });
  }

  if(!fullCode.html && !fullCode.css && !fullCode.javascript)
  {
    return res
      .status(400)
      .json({
        success: false,
        message: "code cannot be blank !!",
      });
  }

  try {
    const newCode = await codeModel.create({
      fullCode: fullCode,
    });
    return res
      .status(200)
      .json({ success: true, url: newCode._id, status: "saved" });
  } catch (error) {
    return res
      .status(500)
      .json({
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

export { saveCode, loadCode };
