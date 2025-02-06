import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);

  //Fetch All Courses

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  //Function to Calculate Average rating of course
  const calculateRating = (course) => {
    if (!course.courseRatings || course.courseRatings.length === 0) {
      return 0; // return 0 if no ratings exist
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };
  // function to calculate course chapter time

  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration));
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  //function to calculate course duration
  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) =>
      chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration))
    );
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  //function to calculate no of lecture in course
  const calculateNoOfLectures = (course) => {
    let totalLecture = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLecture += chapter.chapterContent.length;
      }
    });
    return totalLecture;
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    calculateRating,
    isEducator,
    setIsEducator,
    navigate,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
