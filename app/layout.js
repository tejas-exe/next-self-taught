import React from "react";
import Header from "./components/header";

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
