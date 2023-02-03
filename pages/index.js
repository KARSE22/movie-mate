import Head from "next/head";
import { marvelMovies } from "../data";
import MovieList from "../components/MovieList/MovieList.jsx";
import PageHead from "../components/PageHead.jsx";

export default function Home() {
  return (
    <>
      <PageHead name={"Movie Mate"} description={"A small Netflix Clone"} />
      <main>
        <MovieList marvelMovies={marvelMovies} />
      </main>
    </>
  );
}
