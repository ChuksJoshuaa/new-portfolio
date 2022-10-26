import React from "react";
import imageUrl from "../assets/logo.jpg";
import { navData, LightMode, DarkMode } from "../utils/file";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Theme, OpenSidebar } from "../redux/features/dataSlice";
import { MdViewHeadline } from "react-icons/md";

const Navbar = () => {
  const { isDark } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <div
      className={`w-full h-full flex flex-col ${
        isDark ? "bg-main-dark-bg" : "bg-main-bg "
      }`}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Lobster+Two&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap"
        rel="stylesheet"
      ></link>

      <div className={`container h-[4em]`}>
        <div className=" flex flex-row justify-between items-center px-2 mt-2">
          <Link className="flex flex-row " to="/">
            <img
              src={imageUrl}
              alt="logo"
              className={`rounded-full ${
                isDark ? "border-2 border-red-400" : "border-2 border-gray-800"
              }  h-[52px] w-[52px]`}
            />
            <p
              className={`mt-2 text-2xl md:text-3xl  ${
                isDark ? "text-red-400" : "text-gray-900"
              } `}
              style={{ fontFamily: "Lobster Two" }}
            >
              D-coder
            </p>
          </Link>
          <div className=" flex-row justify-between hidden md:flex">
            {navData?.map((item) => (
              <a
                key={item.id}
                className="flex flex-row mr-4"
                href={`/${item.link}`}
              >
                {/* <p className="text-gray-50 text-xl font-bold">{item.icon}</p> */}
                <p
                  className={`${
                    isDark ? "text-red-400" : "text-gray-900"
                  } text-lg font-semibold ml-1 text-capitalize`}
                  style={{ fontFamily: "Lobster Two" }}
                >
                  {item.name}
                </p>
              </a>
            ))}
          </div>

          {isDark ? (
            <div className="hidden md:block pr-[3em]">
              {LightMode.map((item) => (
                <button
                  className="mr-2 px-4 py-1 text-3xl text-red-400"
                  key={item.id}
                  onClick={() => dispatch(Theme(false))}
                >
                  {item.link}
                </button>
              ))}
            </div>
          ) : (
            <div className="hidden md:block pr-[3em]">
              {DarkMode.map((item) => (
                <button
                  className={`side-icon mr-2 px-4 py-1 text-3xl text-gray-900`}
                  key={item.id}
                  onClick={() => dispatch(Theme(true))}
                >
                  {item.link}
                </button>
              ))}
            </div>
          )}
          <div
            className={`side-icon ${
              isDark ? "text-red-400" : "text-gray-900"
            }  text-3xl font-medium ml-1 block md:hidden pointer-events-auto cursor-pointer`}
            onClick={() => dispatch(OpenSidebar(true))}
          >
            <MdViewHeadline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
