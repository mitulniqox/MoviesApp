import axios from "axios"
import { MOVIES_ERROR, MOVIES_LOADING, MOVIES_SUCCESS } from "./actionTypes"

export const getMoviesList = () => {
  return dispatch => {

    dispatch({ type: MOVIES_LOADING });

    axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: '26eb8fe0ea17478b691097b4e10c4ac9',
      },
    }).then(res => {
      dispatch({
        type: MOVIES_SUCCESS,
        payload: res.data.results || []
      });
    }).catch(err => {
      dispatch({ type: MOVIES_ERROR, payload: err });
    });
  }
}