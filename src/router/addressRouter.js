import express from "express";
import {
  addAddress,
  updateAddress,
  getAddress,
  deleteAddress,
  makeAddressAsDefault,
} from "../controllers/address.controller";
import { getVerifyToken } from "../middleware/auth"
import { addressValidator } from "../validations/address.validator" 

const addressRouter = express();

addressRouter.post("/add-address", getVerifyToken, addressValidator, addAddress);
addressRouter.get("/address", getVerifyToken, getAddress);
addressRouter.patch(
  "/update-address",
  getVerifyToken,
  addressValidator,
  updateAddress
);
addressRouter.delete("/delete-address", getVerifyToken, deleteAddress);
addressRouter.put("/default-address", makeAddressAsDefault);

export default addressRouter
