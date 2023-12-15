import express from "express";


import { postContactUs } from "../controllers/contact.controller"
import { getVerifyToken } from "../middleware/auth"
import { contactUsValidator } from "../validations/contact.validator"


const contactRouter = express();


contactRouter.post(
  "/post-contact-us",
  getVerifyToken,
  contactUsValidator,
  postContactUs
);


export default contactRouter;
