const { userService } = require('../services');

const validateEmailExistence = async (req, res, next) => {
    const { body } = req;
    const user = await userService.checkEmail(body.email);
    if (user) return res.status(409).json({ message: 'User already registered' });
    return next();
};

module.exports = validateEmailExistence;
