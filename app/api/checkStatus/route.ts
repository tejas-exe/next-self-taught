import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieGetter = await cookies();
    let token = cookieGetter.get("token")?.value;
    console.log(!!token);

    return NextResponse.json({
      isAuth: !!token,
    });
  } catch (error) {
    console.log("=->", error);
  }
}
