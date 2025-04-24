import Link from "next/link";
import "./globals.css"
import BeautifulBox from "./components/LinkComponent";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-8">

      <BeautifulBox />
    </div>
  );
}
