import { combineReducers } from "redux"
import { paginationSlice } from "../slice/paginationSlice"
import { MoviesListReducer } from "./MoviesListReducer"

export const rootReducer = combineReducers({
    MoviesList: MoviesListReducer,
    pagination: paginationSlice.reducer
});