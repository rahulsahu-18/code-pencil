import express, { Request, Response } from "express";
import cors from "cors";
import compileRouter from "./routes/compilerRoutes";
import { config } from "dotenv";
import connectDB from "./config/dbConnect";
import userRoutes from "./routes/userRoutes";
import cookieParser from "cookie-parser";

config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:5173",
      "https://code-pencil-alpha.vercel.app/",
      process.env.CLIENT_URL!,
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.options("*", cors() as any);
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
