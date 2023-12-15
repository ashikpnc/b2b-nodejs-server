import express from "express";
import formidable from "express-formidable";

import {
  uploadCsv,
  exportMasterProducts,
  createMasterProducts,
  getMasterProducts,
  getOneMasterProducts,
  updateMasterProducts,
  deleteMasterProduct,
} from "../controllers/fileMasterProducts.controller"

const formidableParser = formidable({ encoding: "utf-8", limit: "200mb" });
const fileMasterProductsRouter = express.Router();

fileMasterProductsRouter.get("/masterproduct", getMasterProducts);
fileMasterProductsRouter.post("/upload", formidableParser, uploadCsv);
fileMasterProductsRouter.get("/exportmasterproducts", exportMasterProducts);
fileMasterProductsRouter.post("/masterproduct", createMasterProducts);
fileMasterProductsRouter.post("/upload", formidableParser, uploadCsv);
fileMasterProductsRouter.post("/masterproduct", createMasterProducts);
fileMasterProductsRouter.get("/masterproduct-by-id", getOneMasterProducts);
fileMasterProductsRouter.patch("/masterproduct", updateMasterProducts);
fileMasterProductsRouter.delete("/masterproduct", deleteMasterProduct);

export default fileMasterProductsRouter;
