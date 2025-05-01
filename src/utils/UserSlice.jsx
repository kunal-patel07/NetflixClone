import { createSlice } from "@reduxjs/toolkit";


let UserSlice  =createSlice({
    name:'user',
    initialState : null,
    reducers:{
        addUser : (state,action)=>{
            return action.payload;
        },
        removeUser : (state,action)=>{
            return null;
        }
       
    }
})


export default UserSlice.reducer
export let {addUser,removeUser} =UserSlice.actions

