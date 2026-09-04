import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.Route.js";
import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.Route.js";
import chatRoutes from "./routes/chat.Route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "node:url";

const currentFile = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFile);
dotenv.config({ path: path.resolve(currentDirectory, "../.env") });

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

const renderOrigin = process.env.RENDER_EXTERNAL_HOSTNAME
  ? `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`
  : "https://lingovibe.onrender.com";

const allowedOrigins = [
  ...(process.env.CLIENT_URL || "").split(","),
  "http://localhost:5173",
  renderOrigin,
]
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin is not allowed by CORS"));
    },
    credentials: true,
  }),
);
await connectDB();
app.listen(PORT, () => {
  console.log(`server is running on this ${PORT}`);
});

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
