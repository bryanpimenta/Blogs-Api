const route = require('express').Router();
const { postController } = require('../controllers');
const validateJwt = require('../middlewares/validateJwt');
const validateCreatePostFields = require('../middlewares/validateCreatePostFields');
const validateCategorieExistence = require('../middlewares/validateCategorieExistence');

route.post(
'/', 
validateJwt, 
validateCreatePostFields, 
validateCategorieExistence, 
postController.create,
);

module.exports = route;
