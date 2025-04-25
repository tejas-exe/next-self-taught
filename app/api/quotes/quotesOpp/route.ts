import { mongoConnection } from "@/DbConfig/dbConfig";
import { authChecker } from "@/lib/auth/authChecker";
import { quotModal } from "@/modal/quotesModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await mongoConnection();
    const { description } = await req.json();
    const user = await authChecker();
    const quotModel = new quotModal({
      author: user.userName,
      description: description,
    });
    await quotModel.save();
    return NextResponse.json(
      { status: "Success", message: "quote added" },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      { status: "Error", message: error.message },
      {
        status: 500,
      }
    );
  }
};
