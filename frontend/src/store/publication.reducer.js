import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const publicationReducer = createSlice({
    name:'publication',
    initialState: {},
    reducers: {
        listePublication:(state,action) => {
            return action.payload;
        },

        addPublication: (state,action) => {
            state.publication.push(action.payload);
        }
    },
});

export const {listePublication,addPublication} = publicationReducer.actions;

export const getPublication = () => (dispatch) => {
    axios.get('http://127.0.0.1:8000/api/publications').then((res)=>{
        dispatch(listePublication(res.data))
    })
}