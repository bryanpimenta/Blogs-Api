const { categorieService } = require('../services');

const validateCategorieExistence = async (req, res, next) => {
    const { categoryIds } = req.body;
    const categories = await categorieService.checkCategories(categoryIds);
    if (categories) return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    return next();
};

module.exports = validateCategorieExistence;
