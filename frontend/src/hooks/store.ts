import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { allStore } from "../store";


export type RootState = ReturnType<typeof allStore.getState>
export type AppDispatch = typeof allStore.dispatch
export const useAppDispatch : () => AppDispatch = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector