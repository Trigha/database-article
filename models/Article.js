'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      article.belongsTo(models.category, {
        as: 'Category',
        foreignKey: 'CategoryId',
      });
    }
  }
  article.init(
    {
      id: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
      title: DataTypes.STRING,
      shortDescription: DataTypes.STRING,
      description: DataTypes.STRING,
      CategoryId: DataTypes.UUID,
      isVisible: DataTypes.BOOLEAN,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'article',
      tableName: 'articles',
      underscored: true,
      timestamps: false,
    }
  );
  return article;
};
