const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const create = async (req, res, next) => {
    try {
        const { title, content, categoryIds } = req.body;
        const { id } = req.user;
        const postCreated = await postService.create({ title, content, userId: id });
        const { status } = await postService.setCategories(categoryIds, postCreated.id);

        res.status(mapStatusHTTP(status)).json(postCreated);
    } catch (error) {
        next(error);
    }
};

module.exports = { create };
