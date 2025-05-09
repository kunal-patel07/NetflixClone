import { useDispatch, useSelector } from "react-redux"
import {  addPopularMovies } from "../../utils/MoviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../../utils/constants"


let usePopularMovies = ()=>{


    let dispatch = useDispatch()
    let popularMovies = useSelector(store=> store.movies.popularMovies)

    let getPopularMovies =  async ()=>{
    let data  = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_OPTIONS)
     let json = await data.json()
     dispatch(addPopularMovies(json.results))
    }
  
    useEffect(()=>{
   if (!popularMovies)
    getPopularMovies()
    },[])
}

export default usePopularMovies;