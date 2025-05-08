import { createSlice } from "@reduxjs/toolkit";


 let configSlice  = createSlice({
    name :"config",
    initialState :  {
        lang: "en",
    },
    reducers : {
        changeLanguage :(state, action)=>{
            state.lang =action.payload  
        }
    }
 })

 export default configSlice.reducer;
 export let {changeLanguage} = configSlice.actions;      