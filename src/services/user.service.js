const { User } = require('../models');
const { genTokenJwt } = require('./validates/authenticate');

const checkEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user;
};

const create = async (newUser) => {
    const createdUser = await User.create(newUser);
    const tokenJwt = genTokenJwt(createdUser);
    return { status: 'CREATED', data: { token: tokenJwt } };
};

const getAll = async () => {
    const res = await User.findAll();
    const users = res
      .map(({ id, displayName, email, image }) => ({ id, displayName, email, image }));
    return { status: 'SUCCESSFUL', 
    data: users };
};

const getById = async (userId) => {
    const res = await User.findByPk(userId);
    if (!res) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
    const { id, displayName, email, image } = res;
    const user = { id, displayName, email, image };
    return { status: 'SUCCESSFUL', data: user };
};

module.exports = { checkEmail, create, getAll, getById };