import express from "express";
import Movie from "../model/Movie.js";
import moment from "moment";
import { addMovie, getMovieByTitle } from "../services/movie-service.js";
import multer from "multer";
import { nanoid } from "nanoid";

const movieRouter = express.Router();

// const upload = multer({ dest: "/tmp" });
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp");
  },
  filename: (req, file, cb) => {
    // console.log("in filename: file,", file);
    const ext = extractExtension(file.originalname);
    console.log("extension: ", ext);
    const newName = nanoid() + "." + ext;
    cb(null, newName);
  },
});

const extractExtension = (name) => {
  const splitted = name.split(".");
  return splitted[splitted.length - 1];
};

const upload = multer({ storage: storage });

movieRouter.post(
  "/file",
  upload.single("file"),

  async (req, res) => {
    console.log("req.file: ", req.file);
  }
);

export default movieRouter;
