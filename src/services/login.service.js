const { User } = require('../models');
const { genTokenJwt } = require('./validates/authenticate');

const login = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    if (!user) return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
    const tokenJwt = genTokenJwt(user);
    return { status: 'SUCCESSFUL', data: { token: tokenJwt } };
};

module.exports = { login };
