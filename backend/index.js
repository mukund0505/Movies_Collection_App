import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import userRoutes from "./routes/userRoutes.js";
import genreRoutes from "./routes/genreRoutes.js";
import moviesRoutes from "./routes/moviesRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

import connectToDB from "./config/db.js";

import cors from "cors";

// configuration

// // Load the .env file from the moviesapp folder
// dotenv.config({ path: "../.env" });
dotenv.config({ path: path.join(path.resolve(), "../.env") });

connectToDB();

const app = express();

app.use(cors()); // Allow all domains for now (you can specify particular domains in production)

// middlewares

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

const PORT = process.env.PORT || 3000;

// routes

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/genre", genreRoutes);

app.use("/api/v1/movies", moviesRoutes);

app.use("/api/v1/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

// Static folder for uploaded images (ensure it's pointing to the root level 'uploads' directory)
// const uploadDir = path.join(path.resolve(), "../uploads"); // Correct path to the uploads folder
// app.use("/uploads", express.static(uploadDir));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
