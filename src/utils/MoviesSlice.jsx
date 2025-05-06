import { createSlice } from "@reduxjs/toolkit";

 
let MovieSlice  = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies : null,

    },
    reducers :{
        addNowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upComingMovies = action.payload
        }
    } 
})


export let {addNowPlayingMovies ,addPopularMovies ,addTopRatedMovies,addUpcomingMovies} =MovieSlice.actions
export default MovieSlice.reducer