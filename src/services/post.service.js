const { BlogPost } = require('../models');
const { PostCategory } = require('../models');

const create = async ({ title, content, userId }) => {
    const postCreated = await BlogPost.create({ title, content, userId });
    return postCreated;
};

const setCategories = async (categoryIds, postId) => {
    const promises = categoryIds.map((categoryId) => PostCategory.create({ postId, categoryId }));
    await Promise.all(promises);
    return { status: 'CREATED' };
  };
  
module.exports = { create, setCategories };
