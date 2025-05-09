import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openAi";

const GptSearchBar = () => {
  let langKey = useSelector((store) => store.config.lang);
  let searchText = useRef(null);
  let handleGptSearchClick = async () => {
    try {
      const userInput = searchText.current?.value?.trim();
      if (!userInput) {
        // console.log("No input provided.");
        return;
      }
  
      const gptQuery =
        "act as a movie recommendation suggest some movie for the query " +
        userInput +
        " only give me name of 5 movies, comma separated like example given ahead. Example: Sholay,Golmaal,Dune,Koi Mil Gaya,Wednesday";
  
      const gptResults = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "Talk like a pirate." },
          { role: "user", content: gptQuery },
        ],
        //  Don't put headers here when using the official OpenAI SDK
        // headers only apply if you're using fetch or axios directly
      });
  
      if (!gptResults?.choices || gptResults.choices.length === 0) {
        console.error("No choices returned from GPT.");
        <h1>something went wrong </h1>
        alert("Something went wrong: No movie suggestions returned.");
        return;
      }
    } catch (error) {
      console.error("Error while fetching GPT movie suggestions:", error);
      alert("Failed to fetch GPT results. Check the console for details.");
    }
  };
  

  return (
    <div className="pt-[10%] flex justify-center px-4 sm:px-6 md:px-8">
      <form
        className="w-full md:w-3/4 lg:w-1/2 bg-black grid grid-cols-12 rounded-lg overflow-hidden"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-3 sm:p-4 m-2 sm:m-4 col-span-9 bg-white rounded-lg text-sm sm:text-base"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          onClick={handleGptSearchClick}
          className="px-2 sm:px-4 py-3 sm:py-4 m-2 sm:m-4 col-span-3 bg-red-700 text-white rounded-lg text-sm sm:text-base hover:bg-red-800 transition-colors"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
