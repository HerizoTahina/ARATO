import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const authReducer = createSlice({
    name:'auth',
    initialState: {},
    reducers: {
        listeAdmin:(state,action)=>{
            return action.payload;
        },

        addAdmin: (state,action)=>{
            state.push(action.payload);
        },

        suppre: (state,action)=>{
            
            state.admin = state.admin.filter(e => e.id !== action.payload);

         
    }
    },
});

export const {listeAdmin,suppre} = authReducer.actions;

export const getAdmin = () => (dispatch) => {
    axios.get('http://127.0.0.1:8000/api/admin').then((res)=>dispatch(listeAdmin(res.data)))
} 


export const register = (value) => (dispatch) => {
    axios.post(`http://127.0.0.1:8000/api/register`,value).then(()=>{
        dispatch(getAdmin());
        console.log(value);
    })
}

export const deleteUser = (id) => (dispatch) => {
    axios.delete(`http://127.0.0.1:8000/api/admin/${id}`).then(()=>dispatch(suppre(id)))
}