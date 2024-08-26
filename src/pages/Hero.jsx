import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full py-20 px-1">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-5  px-2">
        <div className="w-full md:w-1/2  ">
          <img
            src="/img/logo.png"
            className="w-full rounded-full border-[5px] border-[#0cb5f2] p-1 "
            alt=""
          />
        </div>
        <h1 className="text-white text-[5.3rem] font-bold extra-font text-stroke leading-[5rem]">
          CRASH
        </h1>
        <h1 className="text-white text-5xl font-bold title-font pt-2">
          The Best Tron Caller
        </h1>
        <p className="text-whites text-2xl font-semibold text-[#ffffff] w-full blurd-edffect p-4 text-center max-w-2xl mx-auto">
          Crash is the most based caller on all chains and we are doing this
          tribute to make his name known.
        </p>
      </div>
      <img
        src="/img/twitter.jpg"
        alt=""
        className="rounded-lg border-[3px] border-[#0cb5f2] mt-7"
      />
      <img
        src="/img/new1.jpeg"
        alt=""
        className="rounded-lg border-[3px] border-[#0cb5f2] mt-3"
      />
    </section>
  );
};

export default Hero;
