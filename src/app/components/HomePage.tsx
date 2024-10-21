"use client";
import React from "react";

export default function SparklesPreview() {
  return (
    <div className="h-[45rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-4xl lg:text-9xl font-bold text-center text-white relative z-20">
        Upsurge <span className="text-blue-600">Labs</span>
      </h1>
      
      <div className="w-[80rem] h-20 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <div className="text-2xl md:text-3xl text-center mt-5 font-serif px-4">
          Innovating the Future: <br />
          Leading the Next Wave of Technology
        </div>
        <p className="text-lg md:text-xl text-center mt-4 font-serif px-4">
          At Upsurge Labs, we relentlessly push the boundaries of what’s possible, transforming the future of biotechnology, AI, spacetech, and health tech. Our innovations are not just advancements—they are the catalysts that will redefine how we live, work, and explore tomorrow's possibilities.
        </p>

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
