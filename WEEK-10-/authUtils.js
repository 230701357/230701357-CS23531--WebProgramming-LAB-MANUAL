const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(400).json({ message: 'Authentication failed' });
    }

    // If invalid token format or fails verification, catch error below
    try {
      jwt.verify(token, 'secret_key'); // secret key can be anything for test
      next();
    } catch {
      return res.status(400).json({ message: 'Authentication failed' });
    }
  } catch {
    return res.status(400).json({ message: 'Authentication failed' });
  }
};

module.exports = { validateToken };



