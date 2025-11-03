import { Request, Response } from "express";
import { codeModel } from "../models/codeSchema";

const saveCode = async (req: Request, res: Response) => {
    
  const body = req.body || {};
  const { fullCode } = body as { fullCode?: string };

  if (!fullCode) {
    return res.status(400).json({ success: false, message: "fullCode is required in request body" });
  }

  try {
    const newCode = await codeModel.create({
      fullCode: fullCode,
    });
    return res.status(200).json({ success: true,url:newCode._id,status:"saved"});
  } catch (error) {
    return res.status(500).json({ success: false, message: "failed while save", status:"unsaved" });
  }
};

export { saveCode };
