"use client";

import React from "react";
import Navbar from "./components/Navbar";
import FormOutput from "./components/FormOutput";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <Navbar />
      <FormOutput />
    </main>
  );
};

export default page;
