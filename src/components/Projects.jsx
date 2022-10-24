import React from "react";
import { useSelector } from "react-redux";

const Projects = () => {
  const { isDark } = useSelector((state) => state.data);

  return (
    <div
      className={`w-full h-full flex flex-col ${
        isDark ? "bg-main-dark-bg" : ""
      }`}
    ></div>
  );
};

export default Projects;
