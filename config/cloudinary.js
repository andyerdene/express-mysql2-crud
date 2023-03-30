import * as Cloudinary from "cloudinary";

Cloudinary.config({
  cloud_name: "dzefgsrou",
  api_key: "439797886965495",
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

export default Cloudinary;
