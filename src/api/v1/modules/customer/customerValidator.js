import Joi from 'joi';

//  Create customer validation
export const customerValidation = (data) => {
  const result = Joi.object()
    .keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      company: Joi.string().required(),
      birthday: Joi.date().required(),
    })
    .validate(data, { abortEarly: false });
  result.value = data;
  return result;
};
