import React from "react";
import { socials } from "../constant";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-7 py-7 px-2">
        <div className="flex items-center justify-center gap-3 md:gap-9 mt-9 w-full">
          {socials.map((item, index) => (
            <a
              key={index}
              className="w-16 h-16 bg-[#6fa3f7] relative flex items-center justify-center rounded-full"
            >
              <img src={item.img} className="w-12 h-12 z-30" alt="link icons" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
