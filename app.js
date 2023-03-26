import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./config/mongoose-config.js";
// import movieRouter from "./routes/movies-api.js";
import geoRoute from "./routes/restaurant.js";

// Configuration

const app = express();
const port = 6060;
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
