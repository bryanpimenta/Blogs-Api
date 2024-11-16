const route = require('express').Router();
const { categorieController } = require('../controllers');
const validateJwt = require('../middlewares/validateJwt');
const validateCreateCategorieFields = require('../middlewares/validateCreateCategorieFields');

route.post('/', validateCreateCategorieFields, validateJwt, categorieController.create);
route.get('/', validateJwt, categorieController.getAll);

module.exports = route;
