'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Category.hasMany(models.Article, {
      //   as: 'Article',
      //   foreignKey: 'CategoryId',
      // });
    }
  }
  category.init(
    {
      id: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'category',
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    }
  );
  return category;
};
