import { User } from "../schema/user.schema.js";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

export const signUp = async (request, response, next) => {
  // console.log(request);
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    console.log(errors);
  } else {
    // console.log(request);
    let password = request.body.password;
    let encryptedPassword = await bcrypt.hash(password, 10);
    request.body.password = encryptedPassword;
    User.create(request.body)
      .then((result) => {
        return response.status(201).json(result);
      })
      .catch((err) => {
        console.log(err);
        return response.status(500).json({ error: "Server Error" });
      });
  }
};
