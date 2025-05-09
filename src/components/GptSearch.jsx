import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

let GptSearch = () => {
  return (
    <div className="sm:block">
      <div className="fixed -z-10 sm:block">
        <img 
          src={BG_URL} 
          alt="background"
          className="w-screen h-screen sm:w-auto sm:h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black/50 sm:hidden" /> {/* Overlay only on mobile */}
      </div>

      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
