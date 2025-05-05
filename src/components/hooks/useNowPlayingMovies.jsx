import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../../utils/MoviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../../utils/constants"


let useNowPlayingMovies = ()=>{


    let dispatch = useDispatch()

    let getNowPlayingMovies =  async ()=>{
    let data  = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS)
     let json = await data.json()
     dispatch(addNowPlayingMovies(json.results))
    }
  
    useEffect(()=>{
      getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies;