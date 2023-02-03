import "@/styles/globals.css";
import { useReducer } from "react";
import MovieContext from "../context/MovieContext";

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        [action.payload.id]: action.payload.data,
      };
    default:
      return state;
  }
};

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </MovieContext.Provider>
  );
}
