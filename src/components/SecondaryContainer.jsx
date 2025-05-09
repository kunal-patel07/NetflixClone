import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  let movies = useSelector(store => store.movies)

  return (
    <div className='bg-black'>
      <div className='-mt-20 sm:-mt-32 md:-mt-40 lg:-mt-52 px-4 sm:px-8 md:px-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
