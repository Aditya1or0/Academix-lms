import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-purple-100/90">
      <h1 className="md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto">
        <span className="bg-gradient-to-r from-[#ac00ce] to-[#6a00b8] text-transparent bg-clip-text">
          {" "}
          Welcome to Academix,
        </span>
        <br /> your smart learning partner.{" "}
        <img
          src={assets.sketch}
          alt="sketchicon"
          className="md:block hidden absolute -bottom-7 right-0"
        />
      </h1>

      <p className="mt-1 md:block hidden  text-gray-600 max-w-2xl mx-auto">
        Unlock your potential with seamless, efficient, and engaging education
        tools.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
