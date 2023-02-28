import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import emp_routers from "./routes/employee.js";

const app = express();
const port = 6000;
app.use(bodyParser.json());
app.use(cors());

app.use(emp_routers);
// app.use(departments_routers);

app.listen(port, () => {
  console.log("listening on port", port);
});
