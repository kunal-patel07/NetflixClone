import { useDispatch } from "react-redux"
import {  addPopularMovies } from "../../utils/MoviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../../utils/constants"


let usePopularMovies = ()=>{


    let dispatch = useDispatch()

    let getPopularMovies =  async ()=>{
    let data  = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_OPTIONS)
     let json = await data.json()
     dispatch(addPopularMovies(json.results))
    }
  
    useEffect(()=>{
    getPopularMovies()
    },[])
}

export default usePopularMovies;