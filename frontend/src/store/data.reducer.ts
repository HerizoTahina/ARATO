import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constants/env";
import { IProject } from "../types/IProject";
import { IUser } from "../types/IUser";
import { IBlog } from "../types/IBlog";

type IData = {
  projects: Array<IProject>;
  users: Array<IUser>;
  blogs: Array<IBlog>;
};

const initialState = {
  projects: [],
  users: [],
  blogs: [],
} as IData;

export const dataReducer = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Array<IProject>>) => {
      state.projects = action.payload;
    },
    setUsers: (state, action: PayloadAction<Array<IUser>>) => {
      state.users = action.payload;
    },
    setBlogs: (state, action: PayloadAction<Array<IBlog>>) => {
      state.blogs = action.payload;
    },
  },
});

export const { setProjects, setUsers, setBlogs } = dataReducer.actions;

export const getAllProjects = () => (dispatch: any) => {
  axios
    .get(`${BASE_URL}/api/projets`)
    .then((res) => {
      dispatch(setProjects(res.data["hydra:member"]));
      // dispatch(setProjects(res.data))
    })
    .catch((err) => console.log(err));
};

export const getAllUsers = () => (dispatch: any) => {
  axios
    .get(`${BASE_URL}/api/utilisateurs`)
    .then((res) => {
      dispatch(setUsers(res.data["hydra:member"]));
      // dispatch(setProjects(res.data))
    })
    .catch((err) => console.log(err));
};

export const getAllBlogs = () => (dispatch: any) => {
  axios
    .get(`${BASE_URL}/api/publication_evenements`)
    .then(async (response) => {
      const blogs = response.data["hydra:member"];
      dispatch(setBlogs(blogs));
    })
    .catch((err) => console.log(err));
};
