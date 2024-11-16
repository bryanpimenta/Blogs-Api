const checkRequiredFields = require('../utils/checkRequiredFields');

const validateCreateCategorieFields = (req, res, next) => {
    const { body } = req;
    const requiredFields = ['name'];
    const error = checkRequiredFields(body, requiredFields);
    if (error || body.name.length <= 0) {
      return res.status(400).json({ message: '"name" is required' });
    }

    return next();
};

module.exports = validateCreateCategorieFields;
