import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "User Name is required"],
    unique: [true, "Unique user name is required"],
  },
  email: {
    type: String,
    required: [true, "Hey email is necessary"],
    unique: [true, "Unique email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
  },
  isUserVerified: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  } else {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.pwChecker = async function (
  hashedPW: string,
  unhashedPW: string
) {
  return await bcrypt.compare(unhashedPW, hashedPW);
};

export const userModal =
  mongoose.models.users || mongoose.model("users", userSchema);
