import React, { useState } from "react";
import { navlinks, socials } from "../constant";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="relative w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-5 blurd-effect">
        <div className="flex items-center gap-2">
          <img
            src="/img/logo.png"
            className="w-14 rounded-full border-[5px] border-[#0cb5f2] p-1 "
            alt=""
          />{" "}
          <h1 className="text-white text-3xl font-boldd extra-font text-stroke-sm">
            CRASH
          </h1>
        </div>
        <ul className="hidden md:flex items-center gap-7">
          {navlinks.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="text-white text-3xl">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="shadow-effect text-white text-3xl font-mediun px-12 py-4 rounded-full bg-sky-500 mt-7 tracking-wider hidden md:flex">
          Buy Now
        </button>
        <button onClick={handleMenu} className="md:hidden">
          <CgMenuRight size={40} className="text-[#1b66ac] " />
        </button>
      </nav>

      {isOpen && (
        <nav className="shadow-effect fixed top-0 left-0 bottom-0 w-9/12 bg-[#9bc1fa]  z-[999] py-5 md:hidden flex flex-col items-center justify-start duration-300 transition-all border-r-4 border-[#0cb5f2]">
          <div className="flex items-center gap-2">
            <img
              src="/img/logo.png"
              className="w-14 rounded-full border-[5px] border-[#0cb5f2] p-1 "
              alt=""
            />{" "}
            <h1 className="text-white text-4xl font-boldd extra-font text-stroke-sm">
              CRASH
            </h1>
          </div>

          <ul className="flex flex-col items-center justify-center gap-9 mt-12">
            {navlinks.map((item, index) => (
              <li key={index} onClick={() => setIsOpen(false)}>
                <a href={item.url} className="text-sky-950 text-4xl font-bold">
                  {item.label}
                </a>
              </li>
            ))}
            <button className="shadow-effect text-white text-3xl font-mediun px-12 py-4 rounded-full bg-sky-500 mt-7 tracking-wider">
              Buy Now
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
