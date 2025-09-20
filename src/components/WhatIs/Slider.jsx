import React, { useState, useEffect } from "react";
import seed from "../../assets/seed.svg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data - you can replace with your actual data
  const slides = [
    {
      id: 1,
      title: "Yield Aggregator",
      subtitle: "One-click yield aggregation",
      description:
        "Choose multiple stable coin strategies Choose multiple stable coin strategies Choose",
      image: seed,
    },
    {
      id: 2,
      title: "Smart Portfolio",
      subtitle: "Automated portfolio management",
      description:
        "Diversify across multiple DeFi protocols with intelligent risk management and optimization",
      image: seed,
    },
    {
      id: 3,
      title: "Risk Analytics",
      subtitle: "Advanced risk assessment",
      description:
        "Real-time monitoring and analysis of your DeFi positions with comprehensive risk metrics",
      image: seed,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-[100vw] max-w-2xl mx-auto overflow-hidden mt-[48px] md:hidden ">
      {/* Main slider container */}
      <div className="relative h-80 overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="min-w-full h-full flex justify-center items-center p-8"
            >
              <div className="flex flex-col gap-6 justify-center items-center max-w-sm">
                {/* Image */}
                <div className="flex justify-center items-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-32 w-32  "
                  />
                </div>

                {/* Header with number and title */}
                <div className="flex items-center justify-between w-full rounded-2xl p-2 bg-gray-100">
                  <div className="bg-gray-900 rounded-full w-8 h-8 flex justify-center items-center">
                    <span className="text-white text-sm font-bold">
                      {slide.id}
                    </span>
                  </div>
                  <div className="flex justify-center w-full">
                    <h3 className="text-gray-800 font-semibold text-xl">
                      {slide.title}
                    </h3>
                  </div>
                  <div className="w-8"></div> {/* Spacer for balance */}
                </div>

                {/* Description card */}
                <div className="flex flex-col justify-center gap-2 bg-gray-100 rounded-2xl p-4 w-full">
                  <p className="text-gray-800 text-sm font-bold">
                    {slide.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2  rounded-full p-2 "
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 "
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center items-center gap-2 py-4 ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-gray-800 w-6"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
