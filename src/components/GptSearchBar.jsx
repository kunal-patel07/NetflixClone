import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  let langKey =useSelector((store) => store.config.lang)

  return (
    <div className="pt-[10%] flex  justify-center   ">
        <form className=" w-1/2 bg-black grid grid-cols-12">
        <input 
        type="text"
        className="p-4 m-4 col-span-9 bg-white "
        placeholder={lang[langKey].gptSearchPlaceHolder}
      />
      <button className="px-4 py-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">{lang[langKey].search}</button>
    

        </form>
      </div>
  );
};

export default GptSearchBar;
