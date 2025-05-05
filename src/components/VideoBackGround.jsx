import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

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
    console.log(trailer[0].key)
  };

  useEffect(() => {
    getMovieVideos();
  }, []);  return (
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=1`
        }
        title="Exterritorial | Official Trailer | Netflix"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      //  referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
