import express from "express";
import formidable from "express-formidable";
import {
  updateCart,
  csvToCart,
  getCart,
  qtyUpdate,
  removeCartItem,
  deleteCart,
} from "../controllers/cart.controller";
import { getVerifyToken } from "../middleware/auth";
import { cartValidator } from "../validations/cart.validator";

const cartRouter = express.Router();
const formidableParser = formidable({ encoding: "utf-8", limit: "200mb" });

cartRouter.post("/csv-to-cart", formidableParser, csvToCart);

cartRouter.patch("/cart", getVerifyToken, cartValidator, updateCart);
cartRouter.patch("/cart-item-qty", getVerifyToken, qtyUpdate);
cartRouter.get("/cart", getVerifyToken, getCart);
cartRouter.delete("/cart/:cartItemId", getVerifyToken, removeCartItem);
cartRouter.delete("/cart", getVerifyToken, deleteCart);

export default cartRouter;
