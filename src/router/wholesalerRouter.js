import express from "express";
import {
  invoiceReqValidation,
  invoiceQtyValidation,
  stockValidation,
} from "../validations/wholesaler.validator";
import { getVerifyToken } from "../middleware/auth";
import {
  getOneWholesaler,
  orderDateByFilter,
  generateInvoice,
  getGeneratedInvoices,
  getInvoiceDetails,
  invoiceStatusUpdate,
  searchDashboard,
  wholesalerDashboardCount,
  addWholesalerAddress,
  getWholesalerDetails,
  updateWholesalerSettings,
  updateWholesalerAddress,
} from "../controllers/wholesaler.controller";
import { addressValidator } from "../validations/address.validator";
import { updateProfileDetailsValidation } from "../validations/auth.validator";

const wholesalerRouter = express.Router();

wholesalerRouter.get(
  "/orderslist-filter-by-date",
  getVerifyToken,
  orderDateByFilter
);
wholesalerRouter.get("/wholesaler-by-id", getVerifyToken, getOneWholesaler);
wholesalerRouter.post(
  "/generate-invoice",
  invoiceReqValidation,
  getVerifyToken,
  invoiceQtyValidation,
  stockValidation,
  generateInvoice
);
wholesalerRouter.get(
  "/get-all-invoice-details",
  getVerifyToken,
  getGeneratedInvoices
);
wholesalerRouter.get("/get-invoice-details", getVerifyToken, getInvoiceDetails);
wholesalerRouter.patch(
  "/invoice-status-update",
  getVerifyToken,
  invoiceStatusUpdate
);
wholesalerRouter.get("/search-sales-order", getVerifyToken, searchDashboard);
wholesalerRouter.get(
  "/wholesaler-count",
  getVerifyToken,
  wholesalerDashboardCount
);
wholesalerRouter.post(
  "/add-wholesaler-address",
  getVerifyToken,
  addressValidator,
  addWholesalerAddress
);
wholesalerRouter.patch(
  "/update-wholesaler-address",
  getVerifyToken,
  addressValidator,
  updateWholesalerAddress
);
wholesalerRouter.get(
  "/fetch-wholesaler-settings",
  getVerifyToken,
  getWholesalerDetails
);
wholesalerRouter.patch(
  "/update-profile-settings",
  getVerifyToken,
  updateProfileDetailsValidation,
  updateWholesalerSettings
);

export default wholesalerRouter;
