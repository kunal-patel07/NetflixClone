import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"

let AppStore = configureStore({
    reducer :  {
   user : userReducer
    }
})
export default AppStore;