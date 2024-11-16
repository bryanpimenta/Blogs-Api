const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'killjoy';

const genTokenJwt = (user) => {
    const config = { expiresIn: '1d', algorithm: 'HS256' };
    const tokenJwt = jwt.sign({ 
        data: { 
            id: user.id, 
            email: user.email, 
            displayName: user.displayName,
        }, 
    }, secret, config);
    return tokenJwt;
};

module.exports = { genTokenJwt };
