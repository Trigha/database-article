const express = require('express');
const ArticleController = require('../controller/ArticleController');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const Auth = require('../middlewares/authentication');

const uploadFileImagekit = require('../middlewares/uploadFileImagekit');

router.post(
  '/',
  [Auth, upload.single('file'), uploadFileImagekit],
  ArticleController.addArticle
);
router.get('/all', [Auth], ArticleController.getArticles);
router.get('/single', [Auth], ArticleController.getArticle);
router.get('/category', [Auth], ArticleController.getCategories);

module.exports = router;
