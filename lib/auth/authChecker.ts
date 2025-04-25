import { userModal } from "@/modal/userModel";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const authChecker = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (token) {
      const decoded = await jwt.verify(token, process.env.TOKEN_SECRET!);
      if (typeof decoded !== "string" && "id" in decoded) {
        const user = userModal.findById(decoded.id);
        return user;
      }
    } else {
      throw Error("Invalid token");
    }
  } catch (err: any) {
    throw Error(err.message);
  }
};
