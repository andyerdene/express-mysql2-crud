import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://andy:test@cluster0.ysk6rra.mongodb.net/leaptest?retryWrites=true&w=majority"
);

export default mongoose.connection;
