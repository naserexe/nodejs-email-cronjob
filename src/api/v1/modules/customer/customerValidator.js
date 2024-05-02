import Joi from 'joi';

// Create customer validation
export const customerValidation = (data) => {
  const result = Joi.object()
    .keys({
      name: Joi.string().max(30).min(4).required(),
      email: Joi.string().email().max(50).required(),
      company: Joi.string().max(50).min(4).required(),
      birthday: Joi.date().required(),
    })
    .validate(data, { abortEarly: false });
  result.value = data;
  return result;
};
