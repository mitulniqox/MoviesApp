import { MOVIES_ERROR, MOVIES_LOADING, MOVIES_SUCCESS } from "../actions/actionTypes"

const initialState = {
  loading: false,
  data: [],
  error: null
}

export const MoviesListReducer = (state = initialState, action) => {

  switch (action.type) {
    case MOVIES_LOADING:
      return {
        ...state,
        loading: true
      };
    case MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
    case MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}