const { createPostSchema } = require('../services/validates/schemes');

const validateCreatePostFields = (req, res, next) => {
    const { error } = createPostSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
  
    return next();
};

module.exports = validateCreatePostFields;
