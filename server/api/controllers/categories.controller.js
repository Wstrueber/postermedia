const categories = require('./categories/categories.json');

const getAllCategories = async (req, res) => {
  res.json(categories);
};

module.exports = { getAllCategories };
