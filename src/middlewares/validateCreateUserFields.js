const { createUserSchema } = require('../services/validates/schemes');

const validateCreateUserFields = (req, res, next) => {
    const { error } = createUserSchema.validate(req.body);
    if (error) {
        const errorMessage = error.details[0].message;
        return res.status(400).json({ message: errorMessage });
    }
    return next();
};

module.exports = validateCreateUserFields;
