import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  let langKey = useSelector((store) => store.config.lang);
  let searchText = useRef(null);

  let handleGptSearchClick = async () => {
    console.log(searchText.current.value);
  
    let gptQuery =
      "act as a movie recommendation suggest some movie for the query" +
      searchText.current.value +
      " only give me name of 5 movies, comma seperated like example given ahead  Example : Sholey,Golmaal,Dune,Koi Mil Gaya,WednesDay";
  
    let gptResults = await openai.chat.completions.create({
      model: "gpt-4o", // or 'gpt-3.5-turbo' if you don't have access
      messages: [
        { role: "system", content: "Talk like a pirate." },
        { role: "user", content: gptQuery },
      ],
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,  // Using the VITE environment variable
      },
    });
  
    console.log(import.meta.env.VITE_OPENAI_API_KEY)
    console.log(gptResults.choices[0].message.content);
  };
  

  return (
    <div className="pt-[10%] flex  justify-center   ">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 bg-white "
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          onClick={handleGptSearchClick}
          className="px-4 py-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
