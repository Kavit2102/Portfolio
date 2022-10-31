import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
const app = express();

mongoose.connect("mongodb://localhost:27017/userDB", (err) => {
  if (!err) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/", userRoute);

    app.listen(3001, () => {
      console.log("Server Started");
    });
  } else {
    console.log("Database Connection Failed !!!");
  }
});
