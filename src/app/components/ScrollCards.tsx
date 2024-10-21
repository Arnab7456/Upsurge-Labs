"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function ScrollCards() {
  return (
    <div className="h-[40rem]  rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-4xl font-serif">Directions We Are Working On </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Harnessing the power of AI to revolutionize biotech research, we focus on significantly reducing research timelines, enabling faster breakthroughs and more efficient discoveries.",
    title: "Biotechnology",
  },
  {
    quote:
      "Developing a dynamic AI-powered automation platform that continually evolves, designed to enhance productivity and streamline complex tasks across various industries.",
    title: "Artificial Intelligence",
  },
  {
    quote: "Creating advanced wearable devices that not only monitor health but also actively contribute to improving and personalizing health outcomes for individuals.",
    title: "HealthTech Solutions",
  },
  {
    quote:
      "Pioneering technologies in spacetech, from developing innovative satellite systems to advancing exploration tools that push the boundaries of what's possible in space.",
    title: "Spacetech Solutions",
  }
];
