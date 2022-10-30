const { article, category, sequelize } = require('../models');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

class ArticleController {
  static async addArticle(req, res, next) {
    console.log(req.body);
    try {
      const {
        title,
        shortDescription,
        description,
        CategoryId,
        isVisible,
        imageUrl,
      } = req.body;
      if (
        !title ||
        !shortDescription ||
        !description ||
        !isVisible ||
        !imageUrl ||
        !CategoryId
      ) {
        throw { message: 'badRequest - Data Harus di isi semua' };
      }
      const addArticles = await article.create({
        id: uuidv4(),
        title: title,
        shortDescription: shortDescription,
        description: description,
        CategoryId: CategoryId,
        isVisible: isVisible,
        imageUrl: imageUrl,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      });

      res.status(201).json(addArticles);
    } catch (error) {
      next(error);
    }
  }

  static async getArticles(req, res, next) {
    try {
      const articles = await article.findAll({
        include: [
          {
            model: category,
            as: 'Category',
          },
        ],
      });
      res.status(200).json(articles);
    } catch (error) {
      throw error;
    }
  }

  static async getArticle(req, res, next) {
    try {
      const { id } = req.params;
      const article = await article.findOne({
        where: {
          id: id,
        },
        include: [
          {
            model: category,
            as: 'Category',
          },
        ],
      });

      res.status(200).json(article);
    } catch (error) {
      next(error);
    }
  }

  static async getCategories(req, res, next) {
    try {
      const caterogy = await category.findAll();
      res.status(200).json(caterogy);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ArticleController;
