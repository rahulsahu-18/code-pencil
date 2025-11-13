import mongoose from "mongoose";
import { ref } from "process";

interface IcodeSchema {
  fullCode: {
    html: string;
    css: string;
    js: string;
  },
  ownerInfo:mongoose.Schema.Types.ObjectId | string,
  ownerName:string
}

const codeSchema = new mongoose.Schema<IcodeSchema>({
  fullCode: {
    html: String,
    css: String,
    js: String,
  },
  ownerInfo:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
  ownerName:String
});

export const codeModel = mongoose.model("code", codeSchema);
