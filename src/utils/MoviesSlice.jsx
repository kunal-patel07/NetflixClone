import { createSlice } from "@reduxjs/toolkit";

 
let MovieSlice  = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies : null,
    },
    reducers :{
        addNowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies = action.payload
        }
    } 
})


export let {addNowPlayingMovies, addTrailerVideo} =MovieSlice.actions
export default MovieSlice.reducer