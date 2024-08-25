import React from "react";
import { tokenomics } from "../constant";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-7">
        <h1 className="text-white text-5xl font-bold extra-font text-stroke">
          TOKENOMICS
        </h1>
        <ul className="flex flex-col md:flex-row items-center justify-center gap-7 w-full px-7">
          {tokenomics.map((item, index) => (
            <li
              key={index}
              className="w-full md:w-1/3 p-5 flex flex-col items-center justify-center blurd-effect rounded-2xl border-[3px] border-[#0cb5f2]"
            >
              <h1 className="text-white text-7xl font-bold text-stroke-sm extra-font">
                {item.value}
              </h1>
              <h1 className="text-red-00 text-5xl font-bold mt-4 title-font">
                {item.name}
              </h1>
            </li>
          ))}
        </ul>

        <img
          src="/img/banner.jpg"
          alt=""
          className="rounded-lg border-[3px] border-[#0cb5f2]"
        />
      </div>
    </section>
  );
};

export default Tokenomics;
