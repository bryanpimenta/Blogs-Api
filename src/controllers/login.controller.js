const { loginService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const login = async (req, res) => {
    const { email, password } = req.body;
    const { status, data } = await loginService.login(email, password);
    if (email.length === 0 || password.length === 0) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = { login };
