import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[30%] sm:pt-[20%] px-4 sm:px-24 absolute aspect-video w-screen'>
      <h1 className='text-2xl sm:text-6xl text-white font-bold sm:drop-shadow-none drop-shadow-lg'>
        {title}
      </h1>
      <p className='text-sm sm:text-lg p-2 sm:p-6 text-white w-full sm:w-1/4 line-clamp-3 sm:line-clamp-none'>
        {overview}
      </p>
      <div className='flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-0'>
        <button className='bg-white text-black rounded-lg p-2 sm:p-4 px-4 sm:px-12 text-sm sm:text-xl hover:bg-opacity-80 transition-all flex items-center sm:shadow-none shadow-lg'>
          <FontAwesomeIcon className='px-1 sm:px-2' icon={faPlay} />
          Play
        </button>
        <button className='bg-gray-600/80 sm:bg-gray-600 backdrop-blur-sm sm:backdrop-blur-none text-white rounded-lg p-2 sm:p-4 px-4 sm:px-12 text-sm sm:text-xl hover:bg-gray-700 transition-all sm:shadow-none shadow-lg'>
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
