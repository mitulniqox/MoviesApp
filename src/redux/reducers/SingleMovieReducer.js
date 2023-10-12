import { MOVIESLIST_ERROR, MOVIESLIST_LOADING, MOVIESLIST_SUCCESS } from "../actions/actionTypes"


const initialState = {
    loading: false,
    data: [],
    error: null
}

export const SingleMovieReducer = (state = initialState, action) => {

    switch (action.type) {
        case MOVIESLIST_LOADING:
            return {
                ...state,
                loading: true
            };
        case MOVIESLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
            };
        case MOVIESLIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}