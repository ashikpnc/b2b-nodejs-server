import express from "express";


const {
  returnProducts,
  getReturnOrderDetails,
  returnDownloadReceipt,
} = require("../controllers/return.controller");
import upload from "../middleware/upload"
import { getVerifyToken } from "../middleware/auth"
import { returnValidator } from "../validations/return.validator"


const returnRouter = express.Router();


returnRouter.post(
  "/return-product",
  getVerifyToken,
  upload.array("file", 4),
  returnValidator,
  returnProducts
);
returnRouter.get("/get-return-products", getVerifyToken, getReturnOrderDetails);
returnRouter.get("/download-return-receipt", getVerifyToken, returnDownloadReceipt);


export default returnRouter;
