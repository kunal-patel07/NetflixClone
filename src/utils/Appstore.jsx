import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import movieReducer from "./MoviesSlice";
import gptReducer from "./GptSlice"
import configReducer from "./configSlice"
let AppStore = configureStore({
    reducer :  {
   user : userReducer,
   movies : movieReducer,
   gpt:gptReducer,
   config: configReducer
    }
})
export default AppStore;