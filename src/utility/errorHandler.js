
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    error: {
      code: err.code || 500,
      message: err.message || "Something went wrong on the server",
      details: err.details || null,
    },
  });
};

export default errorHandler;
