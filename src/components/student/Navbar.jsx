import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCourseListPage ? "bg-white" : "bg-indigo-100/70"
      }`}
    >
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="w-36 lg:w-44 cursor-pointer"
        />
      </Link>
      <div className="hidden md:flex items-center gap-5 text-gray-700">
        <div className="flex items-center gap-5">
          <button className="hover:text-[#ac00ce]">Become Educator</button>
          <Link to="/my-enrollments" className="hover:text-[#ac00ce]">
            My Enrollments
          </Link>
        </div>
        <button className="bg-gradient-to-r from-[#ac00ce] to-[#6a00b8] hover:from-[#8a00b5] hover:to-[#590080] hover:bg-opacity-100 text-white px-5 py-2 rounded-full">
          Create Account
        </button>
      </div>
      {/* mobile */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-700">
        <div>
          <button className="hover:text-[#ac00ce]">Become Educator |</button>
          <Link to="/my-enrollments" className="hover:text-[#ac00ce]">
            My Enrollments
          </Link>
        </div>
        <button>
          <img src={assets.user_icon} alt="usericon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
