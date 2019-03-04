const router = require('express').Router();
const { categories } = require('../controllers');

router.route('/').get(categories.getAllCategories);

module.exports = router;
