import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackGround = ({ movieId }) => {
 
  let [trailerVideo , setTrailerVideo] =useState([])
  let getMovieVideos = async () => {
    let data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS   
    );
    let json = await data.json();
    // console.log(json);
    let trailer = json.results.filter((videos) => videos.type === "Trailer");
    // console.log(trailer);
    setTrailerVideo(trailer[0].key)
    // console.log(trailer[0].key)
  };

  useEffect(() => {
    getMovieVideos();
  }, []);  return (
    <div className="w-full">
      <iframe
      className="w-screen aspect-video m-0 p-0"
        src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1&loop=1&playlist=${trailerVideo}`
        }
        title="Exterritorial | Official Trailer | Netflix"
        allow="autoplay; encrypted-media"
         allowFullScreen
        frameBorder="0"
        //  nallow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
