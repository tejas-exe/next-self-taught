import LogoutButton from "@/components/LogoutButton";
import { authChecker } from "@/lib/auth/authChecker";
import React from "react";

interface DashboardProps {
  isAuthenticated: boolean;
}

const Dashboard: React.FC<DashboardProps> = async ({ isAuthenticated }) => {
  await authChecker();

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-orange-400 via-sky-900 to-blue-400">
      <div className="text-center bg-white bg-opacity-80 p-10 rounded-xl shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-lg text-gray-600">Welcome to your dashboard, Zod!</p>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Dashboard;
