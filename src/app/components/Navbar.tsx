'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";

 function Navbar ({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    return (
        <div  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            
            <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Artificial Intelligence</HoveredLink>
            <HoveredLink href="/seo">HealthTech Solutions
            </HoveredLink>
            <HoveredLink href="/branding">Spacetech Solutions
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Spacetech Solutions"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Pioneering technologies in spacetech, from developing innovative satellite system"
            />
            <ProductItem
              title="HealthTech Solutions"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Creating advanced wearable devices that not only monitor health but also actively contribute to improving and personalizing health outcomes for individuals."
            />
            <ProductItem
              title="Artificial Intelligence"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Developing a dynamic AI-powered automation platform that continually evolves"
            />
            <ProductItem
              title="Biotechnology"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Harnessing the power of AI to revolutionize biotech research"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Labs">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://upsurge.io/residency">Residency</HoveredLink>
            <HoveredLink href="https://upsurge.io/careers">Careers</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>    
        </div>
    )
}

export default Navbar;