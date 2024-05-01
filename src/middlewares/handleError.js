import config from '../config/index.js';
import { GeneralError } from '../utils/error.js';

export default async (err, req, res, next) => {
  // This is for response general error like not found, bad request, forbidden etc without hiding the messages
  if (err instanceof GeneralError) {
    const code = err.getCode();
    console.log(err);
    return res
      .status(code)
      .json({ name: err.name, message: err.message, success: false });
  }

  // Rest of the error should response from here, and hide message based on running environment
  return res.status(500).json({
    name: 'internal server error',
    message:
      config.env === 'PRODUCTION' ? `Something went wrong!` : err.message,
    success: false,
  });
};
