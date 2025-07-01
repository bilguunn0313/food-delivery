import mongoose, { model, Schema } from "mongoose";
import { UserRoleEnum } from "../enum/UserRoles";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  userName: {
    type: String,
    required: [true, "User Name is required"],
    unique: true,
    trim: true,
    minLength: 2,
    maxLength: 50,
  },
  password: {
    type: String,
    required: [true, "User password is required"],
    minlength: 6,
  },
  email: {
    type: String,
    required: [true, "User Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please write a valid email address"],
  },
  phoneNumber: {
    type: String,
    required: [true, "User phone number is required"],
  },
  address: { type: String, required: [true, "User address is required"] },
  role: {
    type: String,
    enum: Object.values(UserRoleEnum),
    default: UserRoleEnum.USER,
    required: true,
  },
  isVerified: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

UserSchema.pre("save", async function (next) {
  const user = this as any;

  if (!user.isModified("password")) return next;

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

UserSchema.methods.isValidPassword = async function (password: string) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error("Password comparison failed");
  }
};

const User = model("User", UserSchema);

export default User;
