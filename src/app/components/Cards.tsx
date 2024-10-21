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
    <div className="w-full h-full py-20">
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
    content: "Cosmo is an intelligent super-app designed to automate your digital life seamlessly. From managing emails to booking your Uber rides daily, Cosmo handles tasks as if you were doing them yourself. Whether it’s performing web-based actions, making purchases, or organizing your schedule, Cosmo can take care of it all, allowing you to focus on what matters most.",
  },
  {
    category: "Health Care",
    title: "Helium App",
    src: GYM,
    content: "Helium is committed to building insight-driven healthtech devices with a focus on improving the quality of life. By integrating advanced health monitoring tools and personalized insights, Helium empowers athletes, professionals, and health enthusiasts alike to optimize their fitness and well-being effortlessly.",
  },
  {
    category: "Research",
    title: "Biotech Research",
    src: BIOTech,
    content: "Our Biotech division is leading cutting-edge research in gene therapy, with a focus on building Gene Therapy Vehicles. These vehicles aim to further longevity research, particularly in the area of enhancing Telomerase enzyme activity in mammalian cells. This research holds the potential to slow aging and extend healthy lifespans.",
  },
  {
    category: "Space Tech",
    title: "Satellite Solutions",
    src: Space,
    content: "We are developing innovative satellite solutions designed to revolutionize the space industry. Our research is focused on enhancing the efficiency and reliability of satellite systems, pushing the boundaries of what’s possible in space exploration and communication.",
  }
];
