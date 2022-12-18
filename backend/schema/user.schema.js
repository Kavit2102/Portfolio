import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("users", UserSchema);
