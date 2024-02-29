import Link from "next/link";
import { useState } from "react";
import { navbarData } from "@/data/navbar";
import { CloseIcon, HamburgerIcon } from "./icons/navbarIcons";
import React from "react";
import { sendGAEvent } from "@next/third-parties/google";
import BooleanContext from "@/data/context";
import Filters from "./filters";

export default function Navbar() {
  // Create a context
  const MyContext = React.createContext<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const navbarOpened = BooleanContext();
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav
        className="bg-[#0093ed] border-b-[1px] border-opacity-50 border-b-white"
        style={{ top: 0, position: "sticky", zIndex: 999 }}
      >
        <div className=" w-[90%] flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img src="" className="h-8" alt="DevEmpire Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              DevEmpire
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-lg"
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
                  className="flex items-center py-2 px-3 mx-1 text-white hover:bg-[#77cbff] hover:text-black rounded ease-in duration-300"
                  href={`/${item.name.toLowerCase()}`}
                  key={key}
                  onClick={() =>
                    sendGAEvent({ event: "fromNavbar", value: item.name })
                  }
                >
                  {React.createElement(item.icon)}
                  <p className="navbar-text ml-2">{item.name}</p>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <Filters
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        filters={[]}
      />
    </>
  );
}
