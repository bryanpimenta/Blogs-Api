const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res) => {
   const { status, data } = await userService.create(req.body);
   return res.status(mapStatusHTTP(status)).json(data);
};

const getAll = async (req, res) => {
   const { status, data } = await userService.getAll();
   return res.status(mapStatusHTTP(status)).json(data);
};

const getById = async (req, res) => {
   const { status, data } = await userService.getById(req.params.id);
   return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = { create, getAll, getById };
