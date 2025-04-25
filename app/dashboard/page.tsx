import React from "react";
import { NextRequest } from "next/server";
import LogoutButton from "@/components/LogoutButton";
import QuoteCard from "@/components/QuotCard";
import { getAllQuotes } from "@/lib/quotes/getAllQuotes";
import AddQuotesButton from "@/components/AddQuotesButton";

interface DashboardProps {
  isAuthenticated: boolean;
}

const Dashboard: React.FC<DashboardProps> = async () => {
  const mockRequest = {
    cookies: {},
    headers: new Headers(),
    method: "GET",
  } as unknown as NextRequest;

  const res = await getAllQuotes(mockRequest);
  const { data } = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-400 via-sky-900 to-blue-400 flex justify-center items-center px-4 py-10">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-10 w-full max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-lg text-gray-600 mb-4">
            Welcome to your dashboard, Zod!
          </p>
          <AddQuotesButton />
        </div>

        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-20">
          {data.map(({ description, author, _id }: any) => (
            <QuoteCard key={_id} quote={description} author={author} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
