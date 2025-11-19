import mongoose from "mongoose";

interface IcodeSchema {
  fullCode: {
    html: string;
    css: string;
    js: string;
  };
  title: string;
  ownerInfo: mongoose.Schema.Types.ObjectId | string;
  ownerName: string;
}

const codeSchema = new mongoose.Schema<IcodeSchema>(
  {
    fullCode: {
      html: String,
      css: String,
      js: String,
    },
    ownerInfo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ownerName: String,
    title: String,
  },
  { timestamps: true }
);

export const codeModel = mongoose.model("Code", codeSchema);
