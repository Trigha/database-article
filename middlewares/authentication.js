const verifyToken = require('../helpers/verifyToken');
const { user } = require('../models');

const authentication = async (req, res, next) => {
  try {
    // console.log('asdadasd');
    const access_token = req.headers.access_token;
    if (!access_token) {
      throw { message: `noAccess` };
    }
    const users = verifyToken(access_token);
    const userFromDB = await user.findByPk(users.id);
    if (!userFromDB) {
      throw { message: 'Invalid Authentication, Please Re-Login' };
    }
    if (users.password !== userFromDB.password) {
      throw { message: 'Invalid Authentication' };
    }
    req.users = users;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
