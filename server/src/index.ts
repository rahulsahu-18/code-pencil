import express, { Request, Response } from "express";
import compileRouter from "./routes/compilerRoutes";
import { config } from "dotenv";
import connectDB from "./config/dbConnect";
const app = express();
config();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript Server 🚀");
});

app.use("/compile", compileRouter);

app.listen(process.env.PORT, async () => {
  await connectDB();
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
