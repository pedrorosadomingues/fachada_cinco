"use client";

import React from "react";
import ThreeSixtyViewer from "../pages/ThreeSixtyViewer";
import Image from "next/image";

export default function Home() {
  function handleClick() {
    window.location.href = "https://fachada-cinco.vercel.app";
  }
  return (
    <main className="flex items-center justfy-center relative">
      <ThreeSixtyViewer />
      <Image
        src="/fullscreen.svg"
        alt="Fullscreen-icon"
        width={50}
        height={48}
        className="fixed bottom-0 right-0 cursor-pointer"
        onClick={handleClick}
      />
    </main>
  );
}
