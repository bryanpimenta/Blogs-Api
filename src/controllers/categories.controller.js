const { categorieService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res) => {
    const { name } = req.body;
    const { status, data } = await categorieService.create({ name });
    res.status(mapStatusHTTP(status)).json(data);
};

const getAll = async (_req, res) => {
    const { status, data } = await categorieService.getAll();
    res.status(mapStatusHTTP(status)).json(data);
};

module.exports = { create, getAll };
