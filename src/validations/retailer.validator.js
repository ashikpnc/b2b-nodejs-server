const joi = require("joi");
import ApiError from "../utility/ApiError";

const retailerValidation = (req, _res, next) => {
  const schema = joi.object({
    fullName: joi.string(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    throw ApiError.badRequest(error.details[0].message);
  }
  next();
};

export{
  retailerValidation,
};
