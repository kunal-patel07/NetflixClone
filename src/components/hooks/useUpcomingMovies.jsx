import { useDispatch } from "react-redux"
import {   addTopRatedMovies, addUpcomingMovies } from "../../utils/MoviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../../utils/constants"


let useUpcomingMovies = ()=>{


    let dispatch = useDispatch()

    let getUpcomingMovies =  async ()=>{
    let data  = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTIONS)
     let json = await data.json()
     dispatch(addUpcomingMovies(json.results))
    }
  
    useEffect(()=>{
      getUpcomingMovies()
    },[])
}

export default useUpcomingMovies;