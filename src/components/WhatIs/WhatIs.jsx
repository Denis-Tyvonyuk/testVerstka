import React from "react";

import seed from "../../assets/seed.svg";
import Slider from "./Slider";

const WhatIs = () => {
  return (
    <div className="flex flex-col justify-center content-center mt-[60px] mb-[80px]">
      <div>
        <h1 className="font-semibold text-4xl text-gray-800">
          What is Backyard?
        </h1>
      </div>
      <div className="hidden justify-between content-center gap-[48px] md:flex">
        <div className="flex flex-1 justify-center content-center">
          <div className="flex flex-col gap-[6px] justify-center content-center">
            <div className="flex justify-center content-center">
              <img src={seed} alt="" height={120} width={120} />
            </div>
            <div className="flex content-center justify-between w-full rounded-2xl p-[6px] bg-[#F3F4F6]">
              <div className="bg-gray-900 rounded-4xl w-[30px]  flex justify-center content-center flex-wrap">
                <div className="text-white">1</div>
              </div>
              <div className="flex justify-center w-full  content-center">
                <div className="text-gray-800 font-medium text-xl">
                  Yield Aggregator
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center content-center gap-[4px] bg-[#F3F4F6] rounded-2xl p-[16px]">
              <p className="text-gray-800 text-sm font-bold">
                One-click yield aggregation
              </p>
              <p className="text-sm">
                Chose multiple stable coin strategis Chose multiple stable coin
                strategis Chose
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center content-center">
          <div className="flex flex-col gap-[6px] justify-center content-center">
            <div className="flex justify-center content-center">
              <img src={seed} alt="" height={120} width={120} />
            </div>
            <div className="flex content-center justify-between w-full rounded-2xl p-[6px] bg-[#F3F4F6]">
              <div className="bg-gray-900 rounded-4xl w-[30px]  flex justify-center content-center flex-wrap">
                <div className="text-white">1</div>
              </div>
              <div className="flex justify-center w-full  content-center">
                <div className="text-gray-800 font-medium text-xl">
                  Yield Aggregator
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center content-center gap-[4px] bg-[#F3F4F6] rounded-2xl p-[16px]">
              <p className="text-gray-800 text-sm font-bold">
                One-click yield aggregation
              </p>
              <p className="text-sm">
                Chose multiple stable coin strategis Chose multiple stable coin
                strategis Chose
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center content-center ">
          <div className="flex flex-col gap-[6px] justify-center content-center">
            <div className="flex justify-center content-center">
              <img src={seed} alt="" height={120} width={120} />
            </div>
            <div className="flex content-center justify-between w-full rounded-2xl p-[6px] bg-[#F3F4F6]">
              <div className="bg-gray-900 rounded-4xl w-[30px]  flex justify-center content-center flex-wrap">
                <div className="text-white">1</div>
              </div>
              <div className="flex justify-center w-full  content-center">
                <div className="text-gray-800 font-medium text-xl">
                  Yield Aggregator
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center content-center gap-[4px] bg-[#F3F4F6] rounded-2xl p-[16px]">
              <p className="text-gray-800 text-sm font-bold">
                One-click yield aggregation
              </p>
              <p className="text-sm">
                Chose multiple stable coin strategis Chose multiple stable coin
                strategis Chose
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* tablet phone slider */}
      <Slider />
    </div>
  );
};

export default WhatIs;
