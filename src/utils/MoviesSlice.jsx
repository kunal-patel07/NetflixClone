import { createSlice } from "@reduxjs/toolkit";

 
let MovieSlice  = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies : null
    },
    reducers :{
        addNowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies = action.payload
        }
    } 
})


export let {addNowPlayingMovies} =MovieSlice.actions
export default MovieSlice.reducer