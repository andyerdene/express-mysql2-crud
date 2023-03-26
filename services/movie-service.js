import Movie from "../model/Movie.js";

export async function getMovieByTitle(title) {
  console.log("title: ", title);
  let movie = await Movie.find({ title })
    .select("_id genres title runtime year")
    .limit(1);

  return movie;
}

export async function addMovie(newMovie) {
  const result = await new Movie(newMovie).save();
  if (result.title == newMovie.title) {
    return "ok";
  } else {
    return "something went wrong";
  }
}
