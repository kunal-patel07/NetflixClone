import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="p-6  bg-black ">
        <h1 className="text-2xl py-3 mb-2  text-white">{title}</h1>
      <div className="flex overflow-x-scroll  hide-scrollbar">
        {movies && Array.isArray(movies) ? (
          <div className="flex  ">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
