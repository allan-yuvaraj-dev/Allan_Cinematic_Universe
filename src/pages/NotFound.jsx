// src/Pages/NotFound.jsx
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-sky-400 overflow-hidden">
      {/* Lottie Background */}
      <DotLottieReact
        src="https://lottie.host/fd71583a-a23a-4239-8aab-3511ec67bf17/erXtbkBUiz.lottie"
        loop
        autoplay
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay to make text visible */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 mt-48  px-4">
        <button
          onClick={() => navigate("/Er.Allen_Yuvaraj/")}
          className="px-3 md:px-6 md:py-3 bg-white  text-sky-500 font-semibold rounded-lg shadow-lg hover:bg-sky-50 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
