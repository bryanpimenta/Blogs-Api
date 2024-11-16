const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'killjoy';

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

const validateJwt = async (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) return res.status(401).json({ message: 'Token not found' });
  const token = extractToken(bearerToken);

  try {
    const decoded = jwt.verify(token, secret);
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (decoded.exp < currentTimestamp) return res.status(401).json({ message: 'Token expired' });
    req.user = decoded.data;
    next();
  } catch (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateJwt;
