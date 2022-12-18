import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import userRoute from "./routes/user.route.js";

mongoose.connect("mongodb://127.0.0.1:27017/userdb", (err) => {
  if (!err) {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/users", userRoute);

    app.listen(5000, () => {
      console.log("Server Started !!!");
    });
  } else {
    console.log("Connection Failed !!!");
  }
});
