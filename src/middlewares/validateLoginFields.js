const checkRequiredFields = require('../utils/checkRequiredFields');

const validateLoginFields = (req, res, next) => {
    const { body } = req;
    const requiredFields = ['email', 'password'];
    const error = checkRequiredFields(body, requiredFields);
    if (error) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
  
    return next();
};

module.exports = validateLoginFields;
