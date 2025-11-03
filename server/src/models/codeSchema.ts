import mongoose from "mongoose";

interface IcodeSchema {
  fullCode: {
    html: string;
    css: string;
    js: string;
  };
}

const codeSchema = new mongoose.Schema<IcodeSchema>({
  fullCode: {
    html: String,
    css: String,
    js: String,
  },
});

export const codeModel = mongoose.model("code", codeSchema);
