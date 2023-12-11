import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constants/env";
import { IProject } from "../types/IProject";
import { IUser } from "../types/IUser";
import { IBlog } from "../types/IBlog";
import { IArticle } from "../types/IArticle";
import { IActualite } from "../types/IActualite";

type IData = {
  projects: Array<IProject>;
  users: Array<IUser>;
  blogs: Array<IBlog>;
  articles: Array<IArticle>;
  actualites:  Array<IActualite>
};

const initialState = {
  projects: [],
  users: [],
  blogs: [],
  articles: [],
  actualites : []
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
    setArticles: (state, action: PayloadAction<Array<IArticle>>) => {
      state.articles = action.payload;
    },
    setActualites : (state,action : PayloadAction<Array<IActualite>>) => {
      state.actualites = action.payload
    }
  },
});

export const { setProjects, setUsers, setBlogs, setArticles, setActualites } =
  dataReducer.actions;

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

export const getAllArticles = () => (dispatch: any) => {
  axios
    .get(`${BASE_URL}/api/articles`)
    .then(async (response) => {
      const articles = response.data["hydra:member"];
      dispatch(setArticles(articles));
    })
    .catch((err) => console.log(err));
};

export const getAllActualites = () => (dispatch: any) => {
  axios
    .get(`${BASE_URL}/api/actualites`)
    .then(async (response) => {
      const actualites = response.data["hydra:member"];
      dispatch(setActualites(actualites));
    })
    .catch((err) => console.log(err));
};
