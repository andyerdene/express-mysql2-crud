import express from "express";
import {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/emp-service.js";

const Router = express.Router();

Router.get("/employee", async (req, res) => {
  const { query } = req;
  const result = await getEmployee(query.emp_no);
  res.status(200).send(result);
});

// Router.post("/employee", async (req, res) => {
//   const { query } = req;
//   const result = await getEmployee(query.emp_no);
//   res.status(200).send(result);
// });

export default Router;
