import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import { useSelector } from "react-redux";

const Footer = () => {
  const { isDark } = useSelector((state) => state.data);

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollHeight = window.pageYOffset;
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <footer className={`footer ${isDark ? "bg-secondary-dark-bg" : "styles"}`}>
      <div className="footer-sub">
        <img
          className={`${
            isDark ? "border-2 border-red-400" : "border-2 border-gray-800"
          } rounded-full w-[50px]`}
          src={logo}
          alt="footer-icon"
        />
        <ul className="navy">
          <li className="nav-item px-4">
            <a href="https://www.twitter.com/ChuksJoshuaa" className="nav-link">
              <FaTwitter
                className={`text-xl md:text-2xl ${
                  isDark ? "text-red-400" : "text-gray-900"
                }`}
              />
            </a>
          </li>
          <li className="nav-item px-4">
            <a href="https://github.com/ChuksJoshuaa" className="nav-link">
              <FaGithub
                className={`text-xl md:text-2xl ${
                  isDark ? "text-red-400" : "text-gray-900"
                }`}
              />
            </a>
          </li>
          <li className="nav-item px-4">
            <a
              href="https://www.linkedin.com/in/chuks-joshuaa"
              className="nav-link"
            >
              <FaLinkedin
                className={`text-xl md:text-2xl ${
                  isDark ? "text-red-400 text-xl md:text-2xl" : "text-gray-900"
                }`}
              />
            </a>
          </li>
        </ul>
        <p className={`px-2 ${isDark ? "text-red-400" : "text-gray-900"}`}>
          copyright &copy; Chuks Joshua Portfolio
          <span> {new Date().getFullYear()}</span>. all rights reserved
        </p>
      </div>
      <a
        className={`${
          scrollHeight > 300
            ? "scroll-link top-link show-link"
            : "scroll-link top-link"
        } ${isDark ? "bg-red-400" : "bg-black"}`}
        href="#"
      >
        <FaArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
