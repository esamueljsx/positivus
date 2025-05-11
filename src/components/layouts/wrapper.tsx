import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { AOSInit } from "../animations/AOSInit";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <AOSInit />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
