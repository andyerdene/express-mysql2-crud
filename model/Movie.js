import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
  {
    title: String,
    year: Number,
    genres: [String],
    age: Number,
  },
  {
    collection: "movies",
  }
);

const Movie = mongoose.model("Movie", MovieSchema, "movies");

export default Movie;
