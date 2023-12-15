import express from "express";

import {
  addbackOrderProducts,
  deleteBackOrderDetails,
  getAllbackOrderDetails,
} from "../controllers/backOrder.controller"
import { getVerifyToken } from "../middleware/auth"


const backOrderRouter = express.Router();


backOrderRouter.post("/add-backorder-product", getVerifyToken, addbackOrderProducts);
backOrderRouter.get("/all-backorder-details", getVerifyToken, getAllbackOrderDetails);
backOrderRouter.delete("/delete-backorder-item", getVerifyToken, deleteBackOrderDetails);


export default backOrderRouter;
