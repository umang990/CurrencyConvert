import React from "react";
import { RefreshCw } from "lucide-react";

const ConvertButton = () => {
  return (
    <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                       text-white font-semibold text-base sm:text-lg rounded-2xl shadow-lg
                       hover:shadow-xl hover:scale-105 transform transition-all duration-300">
      <RefreshCw className="w-5 h-5" />
      Convert
    </button>
  );
};

export default ConvertButton;
