import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import jwt from "jsonwebtoken";
import { mongoConnection } from "@/DbConfig/dbConfig";
import { userModal } from "@/modal/userModel";
import { NextResponse } from "next/server";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.TOKEN_SECRET,
  callbacks: {
    async signIn({ user, account, profile }: any) {
      await mongoConnection();
      const existingUser = await userModal.findOne({ userName: user.name });
      if (!existingUser) {
        const userSave = await new userModal({
          userName: user.name,
          OauthID: user.id,
        });
        await userSave.save({ validateBeforeSave: false });
      }
      const authUser = await userModal.find({ OauthID: user.id });
      if (authUser) {
        let token = jwt.sign(
          { id: authUser[0].id },
          process.env.TOKEN_SECRET!,
          {
            expiresIn: "7d",
          }
        );
        const response = NextResponse.json({
          status: "Success",
          message: "User created and logged in",
        });
        response.cookies.set("token", token, {
          httpOnly: true,
          maxAge: 60 * 60 * 24,
        });
      }
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

export default NextAuth(authOptions);
