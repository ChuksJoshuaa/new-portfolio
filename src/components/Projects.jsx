import React from "react";
import { useSelector } from "react-redux";
import { dataInfo } from "../utils/file";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const { isDark } = useSelector((state) => state.data);

  return (
    <div
      className={`w-full h-full flex flex-col ${
        isDark ? "bg-main-dark-bg" : "bg-white"
      }`}
      id="projects"
    >
      <div className="home-container">
        <h3
          className={`text-center mt-8 fw-bold text-2xl md:text-4xl mb-2 ${
            isDark ? "text-red-400" : "text-gray-900"
          }`}
          style={{ fontFamily: "Lobster Two" }}
        >
          Projects
        </h3>
        <div
          className={`underline ${
            isDark ? "bg-red-400" : "bg-[#2caeba]"
          } text-center`}
        ></div>
        <div className="page-baby">
          {dataInfo.slice(0, 9).map((item) => (
            <div
              className={`rounded-tl-2xl rounded-tr-2xl head-container ${
                isDark ? "border-1 border-red-200" : "border-1 border-gray-200"
              }`}
              key={item.id}
              // data-aos={"zoom-in"}
            >
              <div
                className="rounded-tl-2xl rounded-tr-2xl page-home"
                style={{
                  background: `url(${item.imageUrl}`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div className={`${isDark ? "bg-white" : ""}`}>
                <div id="instance">
                  <h5
                    style={{ fontFamily: "Lobster Two" }}
                    className="fw-bold mb-3"
                  >
                    {item.name}
                  </h5>
                  <div className="instance">
                    <p
                      className={`fw-bold ${
                        isDark ? "bg-red-200 text-gray-900" : "bg-main-bg"
                      }`}
                    >
                      {item.stack[0]}
                    </p>
                    <p
                      className={`fw-bold ${
                        isDark ? "bg-red-200 text-gray-900" : "bg-main-bg"
                      }`}
                    >
                      {item.stack[1]}
                    </p>
                    <p
                      className={`fw-bold ${
                        isDark ? "bg-red-200 text-gray-900" : "bg-main-bg"
                      }`}
                    >
                      {item.stack[2]}
                    </p>
                  </div>
                </div>
                <div
                  className={`bottom flex flex-row justify-between ${
                    isDark ? "bg-red-200" : "bg-main-bg"
                  }`}
                >
                  <a
                    href={item.gitUrl}
                    target="_blank"
                    className={`btn m-[10px] ${
                      isDark ? "bg-red-300" : "bg-[#2caeba]"
                    } text-gray-50`}
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    className={`btn m-[10px] ${
                      isDark ? "bg-red-300" : "bg-[#2caeba]"
                    } text-gray-50`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
