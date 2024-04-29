const handleValidations = (validate) => {
  return (req, res, next) => {
    const result = validate(req.body);
    const isValid = result.error == null;
    if (isValid) {
      return next();
    }

    const { details } = result.error;
    const message = details.map((e) => {
      return {
        [e.path[0]]: e.message,
      };
    });
    const msg = Object.assign({}, ...message);
    return res
      .status(400)
      .json({ success: false, message: 'Invalid request body', errors: msg });
  };
};

export default handleValidations;
