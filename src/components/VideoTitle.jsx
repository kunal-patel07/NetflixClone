import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute aspect-video w-screen'>
     <h1 className='text-6xl text-white font-bold'>{title}</h1>
     <p className='text-lg p-6 text-white w-1/4'> {overview}</p>
     <div className=''>
        <button className='bg-white text-black   rounded-lg  p-4 px-12 text-xl  hover:opacity-30'>
        <FontAwesomeIcon className='px-2' icon={faPlay} />Play</button>
        <button className=' mx-2 bg-gray-600 text-white  rounded-lg  p-4 px-12 text-xl'>More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle
