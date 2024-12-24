import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import genreRoutes from "./routes/genreRoutes.js";
import moviesRoutes from "./routes/moviesRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

import connectToDB from "./config/db.js";

import cors from "cors";

import { fileURLToPath } from "url";

import dotenv from "dotenv";

import cloudinary from "cloudinary";
// import { CloudinaryStorage } from "multer-storage-cloudinary";

// Load environment variables from .env file in the root directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

// configuration

// // Load the .env file from the moviesapp folder
// dotenv.config({ path: "../.env" });
// dotenv.config({ path: path.join(path.resolve(), "../.env") });  // main IMP

// Simulate __dirname in ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

connectToDB();

const PORT = process.env.PORT || 3000;

// Cloudinary Configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

const _dirname = path.resolve();

// app.use(cors()); // Allow all domains for now (you can specify particular domains in production)

// middlewares

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

// routes

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/genre", genreRoutes);

app.use("/api/v1/movies", moviesRoutes);

app.use("/api/v1/upload", uploadRoutes);

app.use(express.static(path.join(_dirname, "/frontend/dist"))); // serving frontend file
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "../uploads")));   // main IMP

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

// Static folder for uploaded images (ensure it's pointing to the root level 'uploads' directory)
// const uploadDir = path.join(path.resolve(), "../uploads"); // Correct path to the uploads folder
// app.use("/uploads", express.static(uploadDir));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
