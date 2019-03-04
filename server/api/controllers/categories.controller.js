const categories = require('./categories/categories.json')

const getAllCategories = (_, res) => {
	res.json(categories)
}

module.exports = { getAllCategories }
