const Joi = require('@hapi/joi');

const registerValidation = (data) => {
  const userSchema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    email: Joi.string().required(),
    password: Joi.string().min(8).max(10).required(),
  });
  return userSchema.validate(data);
};

const loginValidation = (data) => {
  const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(8).max(10).required(),
  });
  return loginSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
