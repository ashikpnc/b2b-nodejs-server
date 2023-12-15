import express from "express";
import { retailerValidation } from "../validations/retailer.validator";
import {
  createRetailer,
  getRetailer,
  getOneRetailer,
  updateRetailer,
  deleteRetailer,
  getInvoices,
  downloadInvoice,
} from "../controllers/retailer.controller";
import { getVerifyToken } from "../middleware/auth"

const retailerRouter = express.Router();

retailerRouter.post("/retailer", retailerValidation, getVerifyToken, createRetailer);
retailerRouter.get("/retailer", getRetailer);
retailerRouter.get("/retailer-by-id", getOneRetailer);
retailerRouter.patch("/retailer", updateRetailer);
retailerRouter.delete("/retailer", deleteRetailer);
retailerRouter.get("/invoices", getVerifyToken, getInvoices);
retailerRouter.get("/download-invoice", getVerifyToken, downloadInvoice);

export default retailerRouter
