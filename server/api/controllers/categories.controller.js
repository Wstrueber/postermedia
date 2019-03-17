const categories = require('./categories/categories.json')

const getAllCategories = (_, res) => {
	console.log('/categories')
	res.json(categories)
}

module.exports = { getAllCategories }
