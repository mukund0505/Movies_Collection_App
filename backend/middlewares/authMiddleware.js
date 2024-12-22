import jwt from "jsonwebtoken";

import User from "../models/User.js";

import asyncHandler from "./asyncHandler.js";

// check if the user is authenticated or not

const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  // Read JWT from the "jwt cookie"

  token = req.cookies.jwt;

  if (token) {
    try {
      /* Old Token: Header + Payload → Sign using JWT secret → Generate Signature.
        New (Verification): Header + Payload → Sign using JWT secret → Regenerate Signature and compare with old signature. */
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("No authorized , no token");
  }
});

// check if the user is admin or not

/* The order of middleware execution is determined by the order in which they're added to the route. Express executes them in sequence. Therefore, req.user is set in the authenticate middleware, and by the time authorizeAdmin runs, it can access req.user because authenticate called next(). */
const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("Not authorized as an admin");
  }
};

export { authenticate, authorizeAdmin };
