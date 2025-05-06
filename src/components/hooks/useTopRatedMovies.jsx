import { useDispatch } from "react-redux"
import {   addTopRatedMovies } from "../../utils/MoviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../../utils/constants"


let useTopRatedMovies = ()=>{


    let dispatch = useDispatch()

    let getTopRatedMovies =  async ()=>{
    let data  = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS)
     let json = await data.json()
     dispatch(addTopRatedMovies(json.results))
    }
  
    useEffect(()=>{
      getTopRatedMovies()
    },[])
}

export default useTopRatedMovies;