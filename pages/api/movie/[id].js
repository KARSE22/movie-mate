export default async function handler({ query: { id } }, res) {
  try {
    const data = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${id}&plot=full`
    );

    const movie = await data.json();

    if (!movie.Error) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ msg: "Page not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(404).json({
      msg: "An unexpected error has occurred while trying to process your request. Please try again later.",
    });
  }
}
