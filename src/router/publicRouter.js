import express from "express";
import {
  changePasswordValidator,
  emailRequiredValidator,
  loginValidator,
  signupValidator,
  validateOtpValidator,
  updateProfileDetailsValidation,
} from "../validations/auth.validator"
import {
  login,
  signup,
  changePassword,
  resendOTP,
  verifyOTP,
  getUserDetails,
  updateUser,
  deleteUser,
  checkEmail,
  forgotPassword,
  logout,
} from "../controllers/auth.controller"
import { getVerifyToken } from "../middleware/auth"

const publicRouter = express.Router();

publicRouter.post("/signup", signupValidator, signup);
publicRouter.delete("/logout", getVerifyToken, logout);
publicRouter.post("/login", loginValidator, login);
publicRouter.get("/authuser-by-id", getVerifyToken, getUserDetails);
publicRouter.patch(
  "/authuser",
  getVerifyToken,
  updateProfileDetailsValidation,
  updateUser
);
publicRouter.patch(
  "/change-password",
  getVerifyToken,
  changePasswordValidator,
  changePassword
);

// not implemented API's
publicRouter.post("/forgotPassword", forgotPassword);
publicRouter.post("/checkEmail", emailRequiredValidator, checkEmail);
publicRouter.patch("/resend-otp", validateOtpValidator, resendOTP);
publicRouter.patch("/verify-otp", verifyOTP);
publicRouter.delete("/authuser", deleteUser);

export default publicRouter
