"use client";

import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel"; 
import AImg from "@/app/public/ai.jpg";
import GYM from "@/app/public/gym.jpg";
import BIOTech from "@/app/public/BioTech.jpg";
import Space from "@/app/public/futuristic-time-machine.jpg";

export function Cards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 mt-40 ">
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
   
  },
  {
    category: "Health Care",
    title: "Helium App",
    src: GYM,
    
  },
  
  {
    category: "Research",
    title: "Biotech Research",
    src: BIOTech,
  },
  {
    category: "Space Tech",
    title: "satellite solutions",
    src: Space,
  }
];
