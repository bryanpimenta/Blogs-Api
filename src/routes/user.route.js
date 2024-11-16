const route = require('express').Router();
const validateEmailExistence = require('../middlewares/validateEmailExistence');
const validateCreateUserFields = require('../middlewares/validateCreateUserFields');
const validateJwt = require('../middlewares/validateJwt');
const { userController } = require('../controllers');

route.post('/', validateCreateUserFields, validateEmailExistence, userController.create);
route.get('/', validateJwt, userController.getAll);
route.get('/:id', validateJwt, userController.getById);

module.exports = route;