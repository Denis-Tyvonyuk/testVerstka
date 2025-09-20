import React from "react";
import logo from "../../assets/logo.svg";

const First = () => {
  return (
    <div className="flex flex-col items-center mt-12 px-4">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="flex flex-row justify-center content-center">
            <div className="flex justify-center flex-col ">
              <h1 className="font-semibold text-4xl md:text-5xl text-gray-800 mb-4 leading-tight">
                The yield-backed stablecoin protocol boosting DeFi liquidity
              </h1>
              <p className="text-sm text-gray-500 mb-8">
                Keep your yield working for you — we keep your liquidity
                accessible
              </p>
            </div>
            {/* Logo */}
            <div className="flex-shrink-0 flex ">
              <img
                src={logo}
                alt="logo"
                className="w-28 h-28 md:w-56 md:h-56 object-contain"
              />
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-gray-900 text-white text-sm px-14 py-2 rounded-2xl hover:bg-gray-800 transition-colors">
              Join Whitelist
            </button>
            <button className="bg-gray-200 text-gray-900 text-sm px-9 py-2 rounded-2xl hover:bg-gray-300 transition-colors">
              Read Docs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
