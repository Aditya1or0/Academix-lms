import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-violet-100 md:px-26 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 border-b border-black/30 py-10">
        <div className="flex flex-col md:items-start md:mx-4 items-center w-full">
          <img src={assets.logo} alt="logo" className="w-36" />
          <p className="mt-6 text-center md:text-left text-sm text-black/60">
            Best Learning Platform Powered by AI
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-gray-700 mb-2">Company</h2>
          <ul className="flex md:flex-col w-fulll justify-between text-sm text-gray-500 md:space-y-2 gap-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-gray-700 mb-5">
            Subscribe to our News Letter
          </h2>
          <p className="text-sm text-gray-500">
            The latest news, articles, and resources, sent to your inbox.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input
              className="border border-gray-500/30 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded text-sm px-3"
              type="email"
              placeholder="Email Address"
            />
            <button className="bg-gradient-to-r from-[#ac00ce] to-[#6a00b8] hover:from-[#8a00b5] hover:to-[#590080] hover:bg-opacity-100 text-white h-9 px-4  text-sm rounded-md text-center">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="text-center  text-sm text-black/60 py-5 ">
        Copyright 2025 ©Academix All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
