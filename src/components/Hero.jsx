import React from "react";
import { useSelector } from "react-redux";
import imageUrl from "../assets/hero.jpg";

const Hero = () => {
  const { isDark } = useSelector((state) => state.data);
  return (
    <div
      className={`w-full h-full flex flex-col ${
        isDark ? "bg-main-dark-bg" : "bg-main-bg"
      }`}
    >
      <div id="hero" className="container">
        <div
          className={`hero-head mt-5 px-2 `}
          style={{
            background: `${
              isDark
                ? ""
                : "linear-gradient(to right, hsl(186, 100%, 94%), #fff)"
            }`,
          }}
        >
          <div style={{ fontFamily: "Lobster Two" }} data-aos={"fade-right"}>
            <div
              className={`mt-[5%] md:mt-[17%] underline ${
                isDark ? "bg-red-400" : "bg-[#2caeba]"
              }`}
            ></div>
            <p
              className={`text-3xl font-semibold mb-2 leading-tight ${
                isDark ? "text-red-400" : "text-black"
              }`}
            >
              Hello &#128400;,
            </p>
            <h3
              className={`text-3xl font-medium mb-2 leading-tight ${
                isDark ? "text-red-400" : "text-black"
              }`}
            >
              I'm Chukwudi Joshua
            </h3>
            <h3
              className={`leading-tight text-xl capitalize mb-4 ${
                isDark ? "text-red-400" : "text-black"
              }`}
            >
              Software Engineer
            </h3>
            <button
              className={`btn mt-2 leading-tight capitalize ${
                isDark ? "bg-red-200 text-red-400" : "bg-[#2caeba] text-gray-50"
              }`}
            >
              <a href="#contact"> Contact Me</a>
            </button>
          </div>
          <div>
            <img
              src={imageUrl}
              alt="icon-logo"
              width="600"
              loading="lazy"
              className={`hero-img  ${
                isDark
                  ? "opacity-30 border-2 border-red-400 rounded-tl-full rounded-tr-full"
                  : "opacity-100 rounded-full"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
