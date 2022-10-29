import React from "react";
import { useSelector } from "react-redux";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const { isDark } = useSelector((state) => state.data);

  return (
    <div
      className={`w-full h-full flex flex-col ${
        isDark ? "bg-main-dark-bg" : "bg-white"
      }`}
      id="contact"
    >
      <div className="home-container">
        <h3
          className={`text-center mt-8 fw-bold text-2xl md:text-4xl mb-2 ${
            isDark ? "text-red-400" : "text-gray-900"
          }`}
          style={{ fontFamily: "Lobster Two" }}
        >
          Contact Me
        </h3>
        <div
          className={`underline ${
            isDark ? "bg-red-400" : "bg-[#2caeba]"
          } text-center`}
        />
        <p
          className={`navy text-center ${
            isDark ? "text-red-400" : "text-gray-900"
          } mb-4 text-lg md:text-xl w-[70%] md:w-[50%] ml-[auto] mr-[auto]`}
        >
          if you've seen my potential, want to hire me or interested in learning
          programming. Don't hesitate to send a message.
        </p>

        <div className="page-baby mb-[4em] mt-[4em]">
          <a
            className={`flex flex-row justify-center rounded-tl-2xl rounded-tr-2xl ${
              isDark ? "bg-red-400" : "bg-main-bg"
            }`}
            href="mailto:chuksjoshuaa@gmail.com"
          >
            <MdEmail
              className={`m-3 mx-5 text-3xl md:text-5xl text-center capitalize leading-tight ${
                isDark ? "text-gray-900" : ""
              }`}
            />
            <span
              className={`navy p-4 text-xl md:text-2xl text-center capitalize leading-tight ${
                isDark ? "text-gray-900" : ""
              }`}
            >
              Send Mail
            </span>
          </a>
          <a
            className={`flex flex-row justify-center rounded-tl-2xl rounded-tr-2xl ${
              isDark ? "bg-red-400" : "bg-main-bg"
            }`}
            href="tel:+2349098220656"
          >
            <FiPhoneCall
              className={`m-3 mx-5 text-3xl md:text-5xl text-center capitalize leading-tight ${
                isDark ? "text-gray-900" : ""
              }`}
            />
            <span
              className={`navy p-4 text-xl md:text-2xl text-center capitalize leading-tight ${
                isDark ? "text-gray-900" : ""
              }`}
            >
              Phone Call
            </span>
          </a>
          <a
            className={`flex flex-row justify-center rounded-tl-2xl rounded-tr-2xl ${
              isDark ? "bg-red-400" : "bg-main-bg"
            }`}
            href="https://wa.link/k1im37"
          >
            <BsWhatsapp
              className={`m-3 mx-5 text-3xl md:text-5xl text-center capitalize leading-tight ${
                isDark ? "text-gray-900" : ""
              }`}
            />
            <span
              className={`navy p-4 text-xl md:text-2xl text-center capitalize leading-tight ${
                isDark ? "text-gray-900" : ""
              }`}
            >
              Whatsapp
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
