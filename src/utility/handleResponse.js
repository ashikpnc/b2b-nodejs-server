const Logger = require("../middleware/logger");

// Handle and Send the Error Response to Client
const handleErrorResponse = (res, message) => {
  console.log("eraaaa",res.Error)
  // let msg = "";
  // if (message.message) {
  //   msg = message.message;
  // } else {
  //   msg = message;
  // }
  // Logger.error(`Logger error==>. - ${msg}.`);
  // return res.send({
  //   status: 400,
  //   error: true,
  //   message: msg,
  // });
};

// Handle and Send the Success Response to Client
const handleSuccessResponse = (res, data=null, message="", metaData=null,statusCode=200) => {
  return res.status(statusCode).json({
    success: true,
    data: data,
    metadata:metaData,
    message: message,
    statusCode: statusCode,
    timestamp: new Date().toISOString(),
  });
};

// Handle and Send the Success Response to Client
const handleSuccessOrderResponse = (res, count, data, message, metaData) => {
  return res.send({
    status: 200,
    error: false,
    count: count,
    data,
    metaData,
    message,
  });
};

// Handle and Send the Success Response to Client
const handleSuccessUploadResponse = (res, data, message, metaData, errMsg) => {
  return res.send({
    status: 200,
    error: false,
    action: "added",
    data,
    metaData,
    message,
    errMsg,
  });
};

export {
  handleErrorResponse,
  handleSuccessResponse,
  handleSuccessUploadResponse,
  handleSuccessOrderResponse,
};
