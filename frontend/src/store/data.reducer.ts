import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { BASE_URL } from "../constants/env";
import { IProject } from "../types/IProject";

type IData = {
    projects : Array<IProject>
}

const initialState = {
    projects : []
} as IData

export const dataReducer = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setProjects: (state, action : PayloadAction<Array<IProject>>) => {
            state.projects = action.payload
        }
    },
});

export const { setProjects } = dataReducer.actions;
