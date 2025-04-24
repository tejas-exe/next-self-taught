import jwt from "jsonwebtoken";
import { userModal } from "@/modal/userModel";
import { NextRequest, NextResponse } from "next/server";
import { mongoConnection } from "@/DbConfig/dbConfig";

export const POST = async (req: NextRequest) => {
  try {
    await mongoConnection();
    const { userName, password } = await req.json();
    let users = await userModal.find({ userName: userName });
    if (users.length === 0) {
      return NextResponse.json({
        status: "Error",
        message: "No such user exists",
      });
    }
    const user = users[0];
    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET!, {
      expiresIn: "7d",
    });
    if (user.pwChecker(user.password, password)) {
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
    } else {
      return NextResponse.json({ status: "Error", message: "Wrong Password" });
    }
  } catch (error) {
    return NextResponse.json({ status: "Error", message: error });
  }
};
