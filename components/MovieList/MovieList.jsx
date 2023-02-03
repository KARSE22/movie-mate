import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.scss";

export default function MovieList({ marvelMovies } ) {
  return (
    <div className={styles.grid}>
    {marvelMovies.length > 0 &&
      marvelMovies.map((movie, i) => {
        return (
          <MovieCard key={movie.imdbID} movie={movie}>
            {movie.Title}
          </MovieCard>
        );
      })}
      </div>
  )
}