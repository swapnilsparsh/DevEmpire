import Link from "next/link";
import { useState } from "react";
import { Inter } from "next/font/google";
import { navbarData } from "@/data/navbar";
import { CloseIcon, HamburgerIcon } from "./icons/navbarIcons";
import React from "react";

const inter = Inter({ subsets: ["latin"], weight: "600" });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={`${inter.className} bg-black border-b-[1px] border-opacity-50 border-b-white`}>
      <div className=" w-[90%] flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="" className="h-8" alt="DevEmpire Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            DevEmpire
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-lg focus:outline-none text-gray-400 hover:bg-gray-900"
        >
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
        <div
          className={`w-full ${isMenuOpen ? "block" : "hidden"}`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-wrap justify-center font-medium mt-4 rounded-lg">
            {navbarData.map((item, key) => (
              <Link
                className="flex items-center py-2 px-3 mx-1 text-white hover:bg-[#cfae86] hover:text-black rounded ease-in duration-300"
                href={`/${item.name.toLowerCase()}`}
                key={key}
              >
                {React.createElement(item.icon)}
                <p className="navbar-text ml-2">{item.name}</p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
