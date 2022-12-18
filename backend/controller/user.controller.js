// import express from "express";
import { validationResult } from "express-validator";
import { User } from "../schema/user.schema.js";

export const signUp = async (request, response, next) => {
  let user = await User.findOne(request.body.Email).clone();
  if (user) {
    return response
      .status(409)
      .json({ message: "Sorry user already exsts with this email" });
  } else {
    const errors = validationResult(request);
    console.log(errors);
    if (!errors.isEmpty()) {
      console.log("Here up!!!!");
      return response.status(401).json(errors.array());
    } else {
      User.create(request.body)
        .then((result) => {
          // console.log(result);
          return response.status(201).json(result);
        })
        .catch((err) => {
          console.log("Here !!!");
          return response.status(500).json({ error: err });
        });
    }
  }
};

export const registeredUsers = async (request, response, next) => {
  let users = await User.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      return response.status(201).json(data);
    }
  }).clone();
};
