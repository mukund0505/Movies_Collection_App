// import express from "express";
// import multer from "multer";
// import path from "path";

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // Ensure the upload folder is at the root level
//     cb(null, path.join(path.resolve(), "uploads/")); // Path to the root-level 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     const extname = path.extname(file.originalname); // Get file extension
//     cb(null, `${file.fieldname}-${Date.now()}${extname}`); // Name the file uniquely
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const filetypes = /jpe?g|png|webp/;
//   const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

//   const extname = path.extname(file.originalname);
//   const mimetype = file.mimetype;

//   if (filetypes.test(extname) && mimetypes.test(mimetype)) {
//     cb(null, true); // Accept file
//   } else {
//     cb(new Error("Images only"), false); // Reject file
//   }
// };

// const upload = multer({ storage, fileFilter });
// const uploadSingleImage = upload.single("image"); // Handle single file upload with 'image' field name

// router.post("/", (req, res) => {
//   uploadSingleImage(req, res, (err) => {
//     if (err) {
//       res.status(400).send({ message: err.message });
//     } else if (req.file) {
//       res.status(200).send({
//         message: "Image uploaded successfully",
//         image: `/uploads/${req.file.filename}`, // Return the correct path to the uploaded image
//       });
//     } else {
//       res.status(400).send({ message: "No image file provided" });
//     }
//   });
// });

// export default router;

// Under one is main file

// import path from "path";
// import express from "express";
// import multer from "multer";

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "../uploads");
//   },

//   filename: (req, file, cb) => {
//     const extname = path.extname(file.originalname);
//     cb(null, `${file.fieldname}-${Date.now()}${extname}`);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const filetypes = /jpe?g|png|webp/;
//   const mimetypes = /image\/jpe?g|image\/png||image\/webp/;

//   const extname = path.extname(file.originalname);
//   const mimetype = file.mimetype;

//   if (filetypes.test(extname) && mimetypes.test(mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Images only"), false);
//   }
// };

// const upload = multer({ storage, fileFilter });
// const uploadSingleImage = upload.single("image");

// router.post("/", (req, res) => {
//   uploadSingleImage(req, res, (err) => {
//     if (err) {
//       res.status(400).send({ message: err.message });
//     } else if (req.file) {
//       res.status(200).send({
//         message: "Image uploaded successfully",
//         image: `/${req.file.path}`,
//       });
//     } else {
//       res.status(400).send({ message: "No image file provided" });
//     }
//   });
// });

// export default router;

// import dotenv from "dotenv";
// dotenv.config(); // This will load the .env file

import express from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const router = express.Router();

// // Cloudinary Configuration
// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: "uploads", // Folder name in Cloudinary
    allowed_formats: ["jpeg", "jpg", "png", "webp"], // Allowed formats
    public_id: (req, file) => `${file.fieldname}-${Date.now()}`, // Custom public ID
  },
});

// Multer Upload Middleware
const upload = multer({ storage });
const uploadSingleImage = upload.single("image");

// Image Upload Route
router.post("/", (req, res) => {
  uploadSingleImage(req, res, (err) => {
    if (err) {
      res.status(400).send({ message: err.message });
    } else if (req.file) {
      res.status(200).send({
        message: "Image uploaded successfully",
        image: req.file.path, // Cloudinary URL
      });
    } else {
      res.status(400).send({ message: "No image file provided" });
    }
  });
});

export default router;
