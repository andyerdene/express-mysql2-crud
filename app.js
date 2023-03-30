import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./config/mongoose-config.js";
// import movieRouter from "./routes/movies-api.js";
import geoRoute from "./routes/restaurant.js";
import * as dotenv from "dotenv";

// Configuration

const app = express();
dotenv.config();
console.log("cloud:", process.env.CLOUDINARY_SECRET_KEY);
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use(geoRoute);

db.once("open", () => {
  console.log("connected successfully");
});
db.on("error", (error) => {
  console.log("Error connecting to database:", error);
});

app.listen(port, () => {
  console.log("listening on port", port);
});
