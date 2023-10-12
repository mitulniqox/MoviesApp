import { combineReducers } from "redux"
import { paginationSlice } from "../slice/paginationSlice"
import { MoviesListReducer } from "./MoviesListReducer"
import { SingleMovieReducer } from "./SingleMovieReducer";

export const rootReducer = combineReducers({
    MoviesList: MoviesListReducer,
    SingleMovieList: SingleMovieReducer,
    pagination: paginationSlice.reducer
});