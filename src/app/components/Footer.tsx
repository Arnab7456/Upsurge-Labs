// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Aimg from '@/app/public/Img.png';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section: Company Info */}
          <div className="flex flex-col items-start md:items-start">
            <Image src={Aimg} alt="Upsurge Labs Logo" className="h-12 mb-4 w-3/4" />
            <p className="text-sm leading-6 text-center md:text-left">
              Upsurge Labs is an innovation powerhouse, committed to advancing the frontiers of biotechnology, artificial intelligence, spacetech, and health tech.
            </p>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Who We Are</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link href="#" className="text-sm hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link href="#" className="text-sm hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm hover:text-blue-400 transition-colors">Residency</Link></li>
            </ul>
          </div>

          {/* Right Section: Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Contact Information</h3>
            <p className="text-sm leading-6 text-center md:text-left">We'd love to hear from you!</p>
            <p className="text-sm leading-6 text-center md:text-left">
              Whether you’re an entrepreneur with a groundbreaking idea, an investor, or simply interested in learning more.
            </p>
            <div className="mt-4">
              <p className="text-sm font-semibold">ADDRESS</p>
              <p className="text-sm text-center md:text-left">
                Upsurge Labs Pte. Ltd<br />
                3 Fraser Street, #04-23A, Duo Tower<br />
                Singapore 189352
              </p>
              <p className="mt-4 text-sm font-semibold">EMAIL</p>
              <p className="text-sm text-center md:text-left">
                <a href="mailto:info@upsurge.io" className="hover:text-blue-400 transition-colors">info@upsurge.io</a>
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="https://x.com/upsurgelabs" className="text-gray-400 hover:text-blue-400 transition-colors"><FaTwitter /></Link>
          <Link href="https://www.linkedin.com/company/upsurge-labs-pte-ltd/" className="text-gray-400 hover:text-blue-400 transition-colors"><FaLinkedin /></Link>
          <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><FaGithub /></Link>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <p className="text-xs text-gray-400">&copy; 2024 Upsurge Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
