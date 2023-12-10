import { createSlice } from "@reduxjs/toolkit";

export const themeReducer = createSlice({
    name: "theme",
    initialState: {isLight:false},
    reducers: {
        togleTheme: (state,action) => {
            state.isLight = !state.isLight
        }
    },
});
 export const {togleTheme} = themeReducer.actions;