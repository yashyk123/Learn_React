import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./authSlice";
const store = configureStore({
    
  reducer: rootReducer
  
    
});

export default store;