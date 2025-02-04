import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCart from "./CourseCart";

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 px-8 md:px-40">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3 mb-3">
        Learn from the best instructors around the world. We have instructors{" "}
        <br />
        from top universities and companies.
      </p>
      <div className="grid grid-cols-auto px-4 md:px-0 md:my-16 gap-4 mb-6">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCart key={index} course={course} />
        ))}
      </div>

      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded hover:bg-gradient-to-r from-[#ac00ce] to-[#6a00b8] hover:text-white hover:transform hover:scale-105 duration-300"
      >
        See All
      </Link>
    </div>
  );
};

export default CourseSection;
