import axios from "axios";
import { MOVIESLIST_ERROR, MOVIESLIST_LOADING, MOVIESLIST_SUCCESS } from "./actionTypes";


export const getSingleMovies = (id) => {
    return dispatch => {
        dispatch({ type: MOVIESLIST_LOADING });

        axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: {
                api_key: '26eb8fe0ea17478b691097b4e10c4ac9',
            },
        }).then((res) => {
            dispatch({
                type: MOVIESLIST_SUCCESS,
                payload: res.data || []
            });
        }).catch(err => {
            dispatch({ type: MOVIESLIST_ERROR, payload: err });
        });
    }
}