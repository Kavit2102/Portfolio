import express from "express";
// import { body } from "express-validator";
// import { signUp } from "../controller/user.controller.js";

const router = express.Router();

router.post(
  "/signup",
  // body("name", "Please enter your name").notEmpty(),
  // body("email", "Please enter your email").notEmpty(),
  // body("email", "Invalid email").isEmail(),
  // body("message", "Message cannot be empty").notEmpty(),
  // signUp
  (req, res) => {
    res.send(JSON.stringify(req.body));
  }
);

export default router;
