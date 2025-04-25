import { mongoConnection } from "@/DbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { authChecker } from "../auth/authChecker";
import { quotModal } from "@/modal/quotesModel";

export const getAllQuotes = async (req: NextRequest) => {
  try {
    await mongoConnection();
    await authChecker();
    const quotes = await quotModal.find();
    return NextResponse.json({ status: "Success", data: quotes });
  } catch (error: any) {
    return NextResponse.json(
      { status: "Error", message: error.message },
      {
        status: 500,
      }
    );
  }
};
