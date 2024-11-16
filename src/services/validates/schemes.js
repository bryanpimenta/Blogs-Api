const Joi = require('joi');

const displayNameSchema = Joi.string().min(8)
    .messages({
        'string.min': '"displayName" length must be at least 8 characters long',
    });

const passwordSchema = Joi.string().min(6)
    .messages({
        'string.min': '"password" length must be at least 6 characters long',
    });

const emailSchema = Joi.string().email()
    .messages({
        'string.email': '"email" must be a valid email',
    });

const titleSchema = Joi.string().min(3);
const contentSchema = Joi.string().min(3);
const categoryIdsSchema = Joi.array().min(1);

const createUserSchema = Joi.object({
  displayName: displayNameSchema.required(),
  password: passwordSchema.required(),
  email: emailSchema.required(),
  image: Joi.string().allow('').optional(),
});

const createPostSchema = Joi.object({
    title: titleSchema.required(),
    content: contentSchema.required(),
    categoryIds: categoryIdsSchema.required(),
});

module.exports = {
    createUserSchema,
    createPostSchema,
};