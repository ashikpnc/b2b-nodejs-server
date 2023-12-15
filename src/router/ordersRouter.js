import express from "express";

import {
  createOrder,
  getOneOrderDetails,
  getOrderWithFilter,
  invoiceDetailsByInvoiceId,
  getOrderDetails,
  getInvoiceDetails,
  fetchApprovedOrders,
  fetchDeliveredOrders,
  fetchProcessedOrders,
  fetchShippedOrders,
} from "../controllers/orders.controller";
import { getVerifyToken } from "../middleware/auth";


const orderRouter = express.Router();


orderRouter.post("/add-to-order", getVerifyToken, createOrder);
orderRouter.get("/orderDetails", getVerifyToken, getOrderDetails);
orderRouter.get("/getByOrderId", getVerifyToken, getOneOrderDetails);
orderRouter.get("/order/filter", getVerifyToken, getOrderWithFilter);
orderRouter.get("/fetch-approved-orderById", getVerifyToken, fetchApprovedOrders);
orderRouter.get("/fetch-processed-orderById", getVerifyToken, fetchProcessedOrders);
orderRouter.get("/fetch-shipped-orderById", getVerifyToken, fetchShippedOrders);
orderRouter.get("/fetch-delivered-orderById", getVerifyToken, fetchDeliveredOrders);
orderRouter.get("/getInvoiceDetails", getVerifyToken, getInvoiceDetails);
orderRouter.get(
  "/getInvoiceDetailsByInvoiceId",
  getVerifyToken,
  invoiceDetailsByInvoiceId
);


export default orderRouter;
