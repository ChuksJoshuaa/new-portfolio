import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { SiWebpack } from "react-icons/si";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { useSelector } from "react-redux";

const Services = () => {
  const { isDark } = useSelector((state) => state.data);

  return (
    <div
      className={`w-full h-full flex flex-col ${
        isDark ? "bg-main-dark-bg" : "bg-white"
      }`}
    >
      <section
        className={`mt-9 py-2 ${isDark ? "" : "bg-[#f1f5f8]"}`}
        style={{ fontFamily: "Lobster Two" }}
      >
        <h3
          className={`text-center mt-8 fw-bold text-2xl md:text-4xl mb-2 ${
            isDark ? "text-red-400" : "text-gray-900"
          }`}
          id="services"
        >
          Services
        </h3>
        <div
          className={`underline ${
            isDark ? "bg-red-400" : "bg-[#2caeba]"
          } text-center`}
        ></div>
        <div className="container services-center">
          <article
            className={`service rounded-tl-2xl rounded-tr-2xl ${
              isDark
                ? "bg-red-200 hover:bg-red-400"
                : "bg-white hover:bg-[#2caeba]"
            }`}
            data-aos={"zoom-in"}
          >
            <div className="service-icon">
              <BiCodeAlt
                className="side-icon mb-2 text-3xl md:text-5xl font-bold cursor-pointer"
                style={{ marginRight: "auto", marginLeft: "auto" }}
              />
            </div>
            <h4 className="font-[600]">Software Development</h4>
            <div
              className={`underline ${
                isDark ? "bg-red-400" : "bg-[#2caeba]"
              } text-center`}
            ></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates corrupti animi saepe quasi excepturi cupiditate
              voluptate dolor sed obcaecati vero.
            </p>
          </article>
          <article
            className={`service rounded-tl-2xl rounded-tr-2xl ${
              isDark
                ? "bg-red-200 hover:bg-red-400"
                : "bg-white hover:bg-[#2caeba]"
            }`}
            data-aos={"zoom-in"}
          >
            <div className="service-icon text-center">
              <SiWebpack
                className="side-icon mb-2 text-3xl md:text-5xl font-bold cursor-pointer"
                style={{ marginRight: "auto", marginLeft: "auto" }}
              />
            </div>
            <h4 className="font-[600]">Web Development</h4>
            <div
              className={`underline ${
                isDark ? "bg-red-400" : "bg-[#2caeba]"
              } text-center`}
            ></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates corrupti animi saepe quasi excepturi cupiditate
              voluptate dolor sed obcaecati vero.
            </p>
          </article>
          <article
            className={`service rounded-tl-2xl rounded-tr-2xl ${
              isDark
                ? "bg-red-200 hover:bg-red-400"
                : "bg-white hover:bg-[#2caeba]"
            }`}
            data-aos={"zoom-in"}
          >
            <div className="service-icon">
              <MdOutlineFlipCameraAndroid
                className="side-icon mb-2 text-3xl md:text-5xl font-bold cursor-pointer"
                style={{ marginRight: "auto", marginLeft: "auto" }}
              />
            </div>
            <h4 className="font-[600]">Python Programming</h4>
            <div
              className={`underline ${
                isDark ? "bg-red-400" : "bg-[#2caeba]"
              } text-center`}
            ></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates corrupti animi saepe quasi excepturi cupiditate
              voluptate dolor sed obcaecati vero.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Services;
