import { createSlice } from "@reduxjs/toolkit";

let GptSlice  = createSlice({
    name : "gpt",
    initialState:{
      showGptSearch:false   
    },
    reducers : {
      toggleGptSearchView:(state,action)=>{
        state.showGptSearch= !state.showGptSearch
      }
    }
})

export default GptSlice.reducer
export let {toggleGptSearchView} = GptSlice.actions