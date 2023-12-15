import express from "express";
import formidable from "express-formidable";


import { getVerifyToken } from "../middleware/auth"
import {
  wholesalerInventoryValidation,
  importWholesalerInventoryValidation,
  wholesalerInventoryUpdateValidation,
} from "../validations/wholesalerInventory.validator";
import {
  createWholesalerInventory,
  getWholesalerInventory,
  getOneWholesalerInventory,
  updateWholesalerInventory,
  deletewholesalerInventory,
  importWholesalerInventory,
  searchInventory,
} from "../controllers/wholesalerInventory.controller"


const formidableParser = formidable({ encoding: "utf-8", limit: "200mb" });
const wholesalerInventoryRouter = express.Router();


// routes
wholesalerInventoryRouter.post(
  "/wholesalerimport",
  formidableParser,
  getVerifyToken,
  importWholesalerInventoryValidation,
  importWholesalerInventory
);
wholesalerInventoryRouter.post(
  "/wholesalerinventory",
  getVerifyToken,
  wholesalerInventoryValidation,
  createWholesalerInventory
);
wholesalerInventoryRouter.get("/wholesalerinventory", getVerifyToken, getWholesalerInventory);
wholesalerInventoryRouter.get(
  "/wholesalerinventory-by-id",
  getVerifyToken,
  getOneWholesalerInventory
);
wholesalerInventoryRouter.patch(
  "/wholesalerinventory",
  getVerifyToken,
  wholesalerInventoryUpdateValidation,
  updateWholesalerInventory
);
wholesalerInventoryRouter.delete(
  "/wholesalerinventory",
  getVerifyToken,
  deletewholesalerInventory
);
wholesalerInventoryRouter.get("/search-wholesaler-inventory", getVerifyToken, searchInventory);


export default wholesalerInventoryRouter;
