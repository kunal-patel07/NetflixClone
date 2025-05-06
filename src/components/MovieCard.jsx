import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='min-w-[200px]  pr-4 h-[130px] rounded overflow-hidden'  >
      <img className='w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300' src={IMG_CDN_URL + posterPath} alt="movie poster" />
    </div>
  )
}

export default MovieCard
