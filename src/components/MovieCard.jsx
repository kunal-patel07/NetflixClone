import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='min-w-[120px] sm:min-w-[200px] pr-2 sm:pr-4 h-[180px] sm:h-[220px] rounded overflow-hidden'>
      <img 
        className='w-full h-full object-cover rounded-md sm:rounded-none hover:scale-105 transition-transform duration-300' 
        src={IMG_CDN_URL + posterPath} 
        alt="movie poster" 
      />
    </div>
  )
}

export default MovieCard
