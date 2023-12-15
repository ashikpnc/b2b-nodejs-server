import express from "express";


import {
  postTermsAndConditions,
  getTermsAndConditions,
} from "../controllers/termsAndConditions.controller"
import { getVerifyToken } from "../middleware/auth"


const termsAndConditionsRouter = express();


termsAndConditionsRouter.post("/terms-and-conditions", getVerifyToken, postTermsAndConditions);
termsAndConditionsRouter.get("/get-terms-and-conditions", getVerifyToken, getTermsAndConditions);


export default termsAndConditionsRouter;
