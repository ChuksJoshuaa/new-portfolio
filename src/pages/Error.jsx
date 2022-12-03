import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Error = () => {
  const { isDark, isOpen } = useSelector((state) => state.data);
  return (
    <div className="page-100">
      <section className="flex flex-col justify-center items-center text-center">
        <h1
          className={`text-[10rem] text-gray-50 font-bold ${
            isDark ? "text-red-900" : "text-color"
          }`}
        >
          404
        </h1>
        <h3
          className={`mb-[2rem] normal-case font-semibold text-gray-50 text-lg md:text-3xl ${
            isDark ? "text-red-900" : "text-color"
          }`}
        >
          Sorry, the page you tried cannot be found{" "}
        </h3>
        <Link to="./" className="error-btn">
          BACK HOME
        </Link>
      </section>
    </div>
  );
};

export default Error;
