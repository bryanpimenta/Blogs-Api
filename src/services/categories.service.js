const { Category } = require('../models');

const create = async ({ name }) => {
    const newCategory = await Category.create({ name });
    return { status: 'CREATED', data: newCategory };
};

const getAll = async () => {
    const categories = await Category.findAll();
    return { status: 'SUCCESSFUL', data: categories };
};

const checkCategories = async (categoriesId) => {
    const promises = categoriesId.map((id) => Category.findByPk(id));
    const categories = await Promise.all(promises);
    const categoriesNotFound = categories.filter((category) => !category);
    return categoriesNotFound.length > 0;
  };

module.exports = { create, getAll, checkCategories };
