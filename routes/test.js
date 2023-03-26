import express from "express";
import Restaurant from "../model/Restaurant.js";

const restaurantRoute = express.Router();

restaurantRoute.get("/restaurant", async function (req, res) {
  //   const currentLocation = req.query.location;
  const currentLocation = decodeURIComponent(req.query.location);
  const currentLocationObj = JSON.parse(currentLocation);
  const nearestRestaurant = await Restaurant.findOne({
    location: {
      $near: {
        $geometry: currentLocationObj,
        $maxDistance: 1000,
      },
    },
  }).exec();
  console.log(nearestRestaurant);
  res.send("testing");
});
