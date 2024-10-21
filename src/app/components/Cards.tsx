"use client";

import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel"; 
import AImg from "@/app/public/ai.jpg";
import GYM from "@/app/public/gym.jpg";
import BIOTech from "@/app/public/BioTech.jpg";
import Space from "@/app/public/futuristic-time-machine.jpg";

export function Cards() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 mt-40">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Diverse Range Of Innovative Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Artificial Intelligence",
    title: "Cosmo AI",
    src: AImg,
    content: "An AI-powered project for space exploration using advanced algorithms.",
  },
  {
    category: "Health Care",
    title: "Helium App",
    src: GYM,
    content: "A fitness app focused on personalized workout routines and health tracking.",
  },
  {
    category: "Research",
    title: "Biotech Research",
    src: BIOTech,
    content: "Innovative biotech research for advancements in health and medicine.",
  },
  {
    category: "Space Tech",
    title: "Satellite Solutions",
    src: Space,
    content: "Cutting-edge satellite solutions for communication and space technology.",
  }
];
