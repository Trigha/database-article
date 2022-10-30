'use strict';
const { Model } = require('sequelize');
const hashPassword = require('../helpers/hashPassword');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      id: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { notEmpty: true },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { notEmpty: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: { len: [8, 132], notEmpty: true },
      },
    },
    {
      sequelize,
      hooks: {
        beforeCreate: (instance) => {
          instance.password = hashPassword(instance.password);
        },
        beforeUpdate: (instance) => {
          instance.password = hashPassword(instance.password);
        },
      },
      modelName: 'user',
      tableName: 'users',
      underscored: true,
    }
  );
  return user;
};
