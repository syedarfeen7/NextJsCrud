import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", userSchema);

export default User;
