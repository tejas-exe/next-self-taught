import { NextResponse } from "next/server";

export const GET = async () => {
  const response = NextResponse.json({
    status: "Success",
    message: "Logged out successfully",
  });
  response.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  return response;
};
