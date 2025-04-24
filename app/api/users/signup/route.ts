import jwt from "jsonwebtoken";
import { mongoConnection } from "@/DbConfig/dbConfig";
import { userModal } from "@/modal/userModel";
import { NextRequest, NextResponse } from "next/server";

mongoConnection();

export const POST = async (req: NextRequest) => {
  try {
    const { userName, email, password } = await req.json();
    let user = await userModal.findOne({ useName: userName });
    if (user) {
      return NextResponse.json({
        status: "error",
        message: "user already exists",
      });
    }
    let newUser = new userModal({
      userName,
      email,
      password,
    });
    let savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.TOKEN_SECRET!, {
      expiresIn: "7d",
    });
    const response = NextResponse.json({
      status: "Success",
      message: "User created and logged in",
    });
    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    });
    response.cookies.set("authenticated", "true", { maxAge: 60 * 60 * 24 });

    return response;
  } catch (error) {
    return NextResponse.json({
      status: "Error",
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
};
