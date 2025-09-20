import React, { useState } from "react";

import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="  flex justify-center items-center w-full max-w-[1370px] p-[8px] m-[4px]">
      <div className=" mx-auto  h-[44px]  w-full  flex items-center justify-between ">
        {/* Logo and Brand Section */}
        <div className="flex items-center gap-[7px]">
          <img src={logo} alt="logo" className="h-6 w-6" />
          <h1 className="text-xl font-bold text-gray-900">Backyard</h1>
        </div>
        {/* Center Navigation */}
        <div className="flex-1 hidden justify-center items-center sm:flex ">
          <div className="gap-[4px] bg-[#F3F4F6] rounded-2xl">
            <button
              onClick={() => setIsActive("home")}
              className={`text-xs font-medium hover:text-[#303030] hover:bg-[#6b6767] px-3 py-2 rounded-2xl transition-colors duration-200 ${
                isActive === "home"
                  ? " bg-[#303030] text-white"
                  : "text-gray-400"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setIsActive("about")}
              className={`text-xs font-medium hover:text-[#303030] hover:bg-[#303030] px-3 py-2 rounded-2xl transition-colors duration-200 ${
                isActive === "about" ? " text-[#303030]" : "text-gray-400"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setIsActive("howItWorks")}
              className={`text-xs font-medium hover:text-[#303030] hover:bg-[#303030] px-3 py-2 rounded-2xl transition-colors duration-200 ${
                isActive === "howItWorks" ? " text-[#303030]" : "text-gray-400"
              }`}
            >
              How it works
            </button>
            <button
              onClick={() => setIsActive("tokenDesign")}
              className={`text-xs font-medium hover:text-[#303030] hover:bg-[#303030] px-3 py-2 rounded-2xl transition-colors duration-200 ${
                isActive === "tokenDesign" ? " text-[#303030]" : "text-gray-400"
              }`}
            >
              Token design
            </button>
            <button
              onClick={() => setIsActive("yardFlywheel")}
              className={`text-xs font-medium hover:text-[#303030] hover:bg-[#303030] px-3 py-2 rounded-2xl transition-colors duration-200 ${
                isActive === "yardFlywheel"
                  ? " text-[#303030]"
                  : "text-gray-400"
              }`}
            >
              YARD flywheel
            </button>
          </div>
        </div>
        {/* connect button */}
        <div className="hidden md:flex sm:hidden lg:hidden ">
          <div className="h-full bg-[#303030] flex justify-center p-[8px] rounded-2xl mr-[12px]">
            <button className=" text-[#ffffff] text-xs font-medium ml-[3px] mr-[3px]">
              Connect
            </button>
          </div>
        </div>
        {/* phone menu */}

        <div className=" flex justify-center items-center sm:hidden relative h-[40px]">
          <div className="relative">
            {/* Dropdown trigger button */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-center bg-[#F3F4F6] h-[40px] p-[2px] rounded-2xl min-w-[40px]"
            >
              <svg
                className={`w-4 h-4 text-gray-600 transform transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : "text-gray-400"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            <div
              className={`absolute top-full w-[200px] flex flex-col right-0 mt-2 pb-[8px] bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-200 ${
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <button
                onClick={() => {
                  setIsActive("home");
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-[#F3F4F6] transition-colors duration-200 ${
                  isActive === "home" ? " text-[#303030]" : "text-gray-400"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  setIsActive("about");
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-[#F3F4F6] transition-colors duration-200 ${
                  isActive === "about" ? " text-[#303030]" : "text-gray-400"
                }`}
              >
                About
              </button>
              <button
                onClick={() => {
                  setIsActive("howItWorks");
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-[#F3F4F6] transition-colors duration-200 ${
                  isActive === "howItWorks"
                    ? " text-[#303030]"
                    : "text-gray-400"
                }`}
              >
                How it works
              </button>
              <button
                onClick={() => {
                  setIsActive("tokenDesign");
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-[#F3F4F6] transition-colors duration-200 ${
                  isActive === "tokenDesign"
                    ? " text-[#303030]"
                    : "text-gray-400"
                }`}
              >
                Token design
              </button>
              <button
                onClick={() => {
                  setIsActive("yardFlywheel");
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-[#F3F4F6] transition-colors duration-200 ${
                  isActive === "yardFlywheel"
                    ? " text-[#303030]"
                    : "text-gray-400"
                }`}
              >
                YARD flywheel
              </button>
              <div className="flex justify-center content-center">
                <div className="bg-[#303030]  w-[60%] justify-center content-center flex rounded-2xl">
                  <button
                    className={` text-left content-center justify-center flex px-4 py-2 text-xs  text-white font-medium  transition-colors duration-200`}
                  >
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
