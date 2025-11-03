import mongoose from "mongoose";

const connectDB = async function () {
  try {
    await mongoose.connect(process.env.MONGO_DB!);
    console.log("db connected successfuly");
  } catch (error) {
    console.log("db connection faield");
  }
};

export default connectDB;
