const { user, sequelize } = require('../models');
const bcrypt = require('bcrypt');
require('dotenv').config();
const secretkey = process.env.SECRETKEY;
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const hashPassword = require('../helpers/hashPassword');

class UserController {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        throw { message: 'badRequest-login' };
      } else {
        const users = await user.findOne({ where: { username }, raw: true });
        if (!users) {
          throw { message: 'notFound-login' };
        } else {
          const bcryptPass = await bcrypt.compareSync(password, users.password);
          if (!bcryptPass) {
            throw { message: 'forbidden-login' };
          } else {
            //kirim token
            const access_token = jwt.sign(users, secretkey);
            res.status(200).json({
              access_token: access_token,
              data: users,
            });
          }
        }
      }
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    const transaction = await sequelize.transaction();
    try {
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        throw { message: 'badRequest - Data Harus di isi semua' };
      }

      let users = await user.create({
        id: uuidv4(),
        username: username,
        email: email,
        password: password,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      res.status(201).json(users);
    } catch (e) {
      await transaction.rollback();
      next(e);
    }
  }
}

module.exports = UserController;
