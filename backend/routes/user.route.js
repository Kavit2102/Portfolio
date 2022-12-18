import express from "express";
import { body } from "express-validator";
import { signUp, registeredUsers } from "../controller/user.controller.js";

const router = express.Router();

router.post(
  "/create",
  body("Name", "Name is Required !!!").notEmpty(),
  body("Email", "Email is Required !!!").isEmail(),
  body("Message", "Message is Required !!!").notEmpty(),
  signUp
);

router.get("/users-list", registeredUsers);

export default router;
