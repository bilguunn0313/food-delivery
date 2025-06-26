import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  //   id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  //   role: { type: Enumerator, required: true },
  isVerified: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const User = model("User", UserSchema);

export default User;
