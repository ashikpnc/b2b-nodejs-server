import express from "express";

import { fetchReports } from "../controllers/reports.controller"
import { getVerifyToken } from "../middleware/auth"


const retailerRouter = express.Router();


retailerRouter.get("/fetch-reports", getVerifyToken, fetchReports);


export default retailerRouter;
