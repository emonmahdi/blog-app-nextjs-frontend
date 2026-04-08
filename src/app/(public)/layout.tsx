import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import React from "react";

const PublicLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
      <Navbar />
      <main className="mt-0">{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
