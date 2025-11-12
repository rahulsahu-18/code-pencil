import express, { Request, Response } from "express";
import cors from "cors";
import compileRouter from "./routes/compilerRoutes";
import { config } from "dotenv";
import connectDB from "./config/dbConnect";
import userRoutes from "./routes/userRoutes";

config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", process.env.CLIENT_URL!],
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript Server 🚀");
});
app.use("/compile", compileRouter);
app.use("/auth", userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});
