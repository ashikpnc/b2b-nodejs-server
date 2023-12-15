import ApiError from "../utility/ApiError";

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const apiError = require("../utility/ApiError");
const { ADMIN_ROLE } = require("../constant/role");
const { findById } = require("../dao/common.dao");
const { USER_MODEL_NAME } = require("../constant/dbModelName");
const { INACTIVE_STATUS } = require("../constant/status");

const getVerifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
     if (!token) {
       // If no token is provided in the headers, send an unauthorized response
       return next(ApiError.unauthorized("No token provided!"));
     }
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userInfo = decoded.usersData;
    next();
  } catch (error) {
    console.log(error)
    next( ApiError.unauthorized("Authentication failure!"))
  }
};

const allUserAuth = async (req, res, next) => {
  try {
    const userData = await getVerifyToken(req);
    const { id } = userData.data;
    const user = await findById(id, USER_MODEL_NAME);
    if (user.status === INACTIVE_STATUS) {
      throw apiError.unauthorized();
    }
    req.userInfo = userData.data;
    next();
  } catch (err) {
    next(err);
  }
};

const adminAuth = async (req, res, next) => {
  try {
    const userData = await getVerifyToken(req);
    const user = userData.data;
    if (user.role !== ADMIN_ROLE) {
      throw apiError.unauthorized();
    }
    req.userInfo = user;
    next();
  } catch (err) {
    next(err);
  }
};

export {
  getVerifyToken,
  allUserAuth,
  adminAuth,
};
