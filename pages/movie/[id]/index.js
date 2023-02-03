const serverURL = "http://localhost:3000";
import Image from "next/image";
import Error from "next/error";
import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { marvelMovies } from "../../../data";
import MovieContext from "../../../context/MovieContext";
import MovieDetails from "../../../components/MovieDetails/MovieDetails.jsx";
import PageHead from "../../../components/PageHead.jsx";

export default function MoviePage() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);
  const [errorStatus, setErrorStatus] = useState(false);
  const { state, dispatch } = useContext(MovieContext);

  useEffect(() => {
    if (router.isReady && !state[id]) {
      const fetchMovieData = async () => {
        console.log("fetch is being called");
        try {
          const res = await fetch(`${serverURL}/api/movie/${id}`);
          const errorCode = res.ok ? false : res.status;

          if (!errorCode) {
            const movieData = await res.json();
            dispatch({
              type: "ADD_MOVIE",
              payload: { id: movieData.imdbID, data: movieData },
            });
          } else {
            setErrorStatus(true);
          }
        } catch (err) {
          console.error(err);
        }
      };
      fetchMovieData();
    } else {
      console.log("in state");
      setMovie(state[id]);
    }
  }, [router.isReady, state, id, dispatch]);

  if (!movie && !errorStatus) return <p>Loading...</p>;
  if (errorStatus) return <Error statusCode={404} />;

  return (
    <>
      <PageHead name={movie.Title} description={movie.Plot} />
      <main>
        <MovieDetails data={movie} />
      </main>
    </>
  );
}
