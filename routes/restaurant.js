import express from "express";
import Restaurant from "../model/Restaurant.js";

const restaurantRoute = express.Router();

//this route suppose to find me a single restaurant that is nearst
restaurantRoute.post("/restaurant", async function (req, res) {
  //{ type: 'Point', coordinates: [YOUR_LONGITUDE, YOUR_LATITUDE] }
  const currentLocation = req.body.location;
  console.log("currentLocation:", currentLocation);
  const nearestRestaurant = await Restaurant.findOne({
    location: {
      $near: {
        $geometry: currentLocation,
        $maxDistance: 1000,
      },
    },
  }).exec();
  console.log(nearestRestaurant);
  // res.send(nearestRestaurant);
  res.send(nearestRestaurant);
});

restaurantRoute.get("/addrestaurant", async function (req, res) {
  const newRestaurant = new Restaurant({
    name: "Yuna Restaurant",
    location: {
      coordinates: [106.934593, 47.923756],
    },
  });
  newRestaurant.save();
  res.status(200).send("success");
});
export default restaurantRoute;
