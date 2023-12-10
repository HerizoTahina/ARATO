import { createSlice } from "@reduxjs/toolkit";
import AuthUser from "../api/AuthUser";


export const profileReducer = createSlice({
    name:'profile',
    initialState: {},
    reducers: {
        adminConnected:(state,action) =>{
            return action.payload;
        }
    }
});

export const {adminConnected} = profileReducer.actions;

export const getProfile = () => (dispatch) => { 
    const {http} = AuthUser();
    const token = sessionStorage.getItem("token");
    http.get("/profile",{
        headers : {
           Authorization: `Bearer ${token.replace(/"/g, "")}`
     }}).then(res => dispatch(adminConnected(res.data)))
}