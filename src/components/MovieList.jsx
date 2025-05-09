import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-2 sm:px-6 py-4 sm:py-6 bg-black">
      <h1 className="text-xl sm:text-2xl py-2 sm:py-3 mb-2 text-white font-semibold sm:font-normal">
        {title}
      </h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        {movies && Array.isArray(movies) ? (
          <div className="flex gap-2 sm:gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        ) : (
          <p className="text-white text-sm sm:text-base">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
