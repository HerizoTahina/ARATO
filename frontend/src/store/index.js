import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth.reducer";
import { profileReducer } from "./profile.reducer";
import { publicationReducer } from "./publication.reducer";
import { themeReducer } from "./theme.reducer";



export const allStore = configureStore({
    reducer:{
        users: authReducer.reducer,
        profile:profileReducer.reducer,
        publication:publicationReducer.reducer,
        theme:themeReducer.reducer  
    }
});