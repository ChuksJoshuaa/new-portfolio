import React from "react";
import { FaTimes } from "react-icons/fa";
import { navData, LightMode, DarkMode } from "../utils/file";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Theme, OpenSidebar } from "../redux/features/dataSlice";
import imageUrl from "../assets/logo.jpg";

const Sidebar = () => {
  const { isDark } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <div>
      <div
        className={`w-full fixed sidebar h-full ${
          isDark ? "bg-main-dark-bg" : "bg-main-bg"
        } z-50 fixed top-0 left-0 overflow-auto`}
      >
        <div
          className={`flex justify-between p-1 mb-1 ${
            isDark ? "border-b border-red-200" : "border-b border-gray-400"
          }`}
        >
          <Link href="/">
            <div className={`flex justify-between`}>
              <div className="">
                <img
                  className={`rounded-full mb-2 ${
                    isDark
                      ? "border-2 border-red-400"
                      : "border-2 border-gray-800"
                  }  h-[52px] w-[52px]`}
                  src={imageUrl}
                  alt="portfolio"
                  layout="responsive"
                />
              </div>
              <div
                className={`mt-2 text-3xl ${
                  isDark ? "text-red-400" : "text-gray-900"
                } `}
                style={{ fontFamily: "Lobster Two" }}
              >
                D-coder
              </div>
            </div>
          </Link>
          <p
            className="cursor-pointer"
            onClick={() => dispatch(OpenSidebar(false))}
          >
            <FaTimes
              className={`m-3 text-3xl ${
                isDark ? "text-red-400" : "text-gray-900"
              }`}
            />
          </p>
        </div>

        <div className="flex flex-col justify-start mb-10 border-r-2 border-gray-100">
          <div className="mt-5">
            <div className="p-3 flex flex-col justify-between">
              {navData?.map((item) => (
                <a
                  key={item.id}
                  className="pb-5 mb-5 flex flex-row mr-4"
                  href={`/${item.link}`}
                  onClick={() => dispatch(OpenSidebar(false))}
                >
                  <p
                    className={`${
                      isDark
                        ? "text-red-400 hover:border-b-2 border-red-400"
                        : "text-gray-900 hover:border-b-2 border-gray-900"
                    } text-xl font-semibold ml-1 text-capitalize`}
                    style={{ fontFamily: "Lobster Two" }}
                  >
                    {item.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {isDark ? (
          <div className="pr-[3em]">
            {LightMode.map((item) => (
              <button
                className="side-icon mr-2 px-4 py-1 text-3xl text-red-400"
                key={item.id}
                onClick={() => dispatch(Theme(false))}
              >
                {item.link}
              </button>
            ))}
          </div>
        ) : (
          <div className="pr-[3em]">
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
      </div>
    </div>
  );
};

export default Sidebar;
