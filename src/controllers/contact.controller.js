
import { create }  from "../dao/common.dao";;
import { handleSuccessResponse } from "../utility/handleResponse";

const postContactUs = async (req, res, next) => {
  try {
    const { name, phoneNumber, email, message } = req.body;
    const postContactUsPayload = {
      name,
      phoneNumber,
      email,
      message,
    };
    await create("contactUs", postContactUsPayload);
    return handleSuccessResponse(
      res,
      {},
      "Thanks for contact us. Please check your email. Admin will reach out you"
    );
  } catch (error) {
    next(error);
  }
};

export { postContactUs };
