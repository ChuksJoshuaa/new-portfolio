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
      >
        <h3
          className={`text-center mt-8 fw-bold text-2xl md:text-4xl mb-2 ${
            isDark ? "text-red-400" : "text-gray-900"
          }`}
          id="services"
          style={{ fontFamily: "Lobster Two" }}
        >
          Services
        </h3>
        <div
          className={`underline ${
            isDark ? "bg-red-400" : "bg-[#2caeba]"
            } text-center`}
          // style={{ fontFamily: `'Rajdhani', sans-serif` }}
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
              Building, Directing and participating in programming activities, monitoring,
              and evaluating system performance, and designing and implementing
              new programs and features.
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
              Built products that delights customer and identifying problems uncovered by users feedback and troubleshooting the issues to
              ensure 100% accuracy. My specialty lies in customer-facing products.
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
              Design and implement Python code using the Django framework. Identify and fix bottlenecks
              that may arise from inefficient code. Create a wide variety
              of unit tests to verify the functionality of software.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Services;
