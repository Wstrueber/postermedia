const { scrapeMetaData } = require('../service')
const { Food } = require('../models/food.model')

const createFoodPoster = async (req, res, next) => {
	const { body } = req

	let poster

	try {
		poster = await scrapeMetaData(body)
		const post = new Food(poster)
		post.save()
		console.log(post)
	} catch (err) {
		next(err)
	}

	res.status(201).json(poster)
}

const getAllPosters = async (req, res, next) => {
	let posters
	try {
		posters = await Food.find({})
	} catch (err) {
		next(err)
	}
	res.status(201).json(posters)
}

const getPoster = async (req, res, next) => {
	const { id } = req.params
	let poster
	try {
		poster = await Food.findById(id)
	} catch (err) {
		next(err)
	}
	res.json(poster)
}

const updatePoster = async (req, res, next) => {
	const { id } = req.params
	const { body } = req
	let updatedPoster
	try {
		updatedPoster = await Food.findByIdAndUpdate(id, body, { new: true })
	} catch (err) {
		next(err)
	}
	res.status(202).json(updatedPoster)
}

const deletePoster = async (req, res, next) => {
	const { id } = req.params
	try {
		await Food.findByIdAndDelete(id)
	} catch (err) {
		next(err)
	}
	res.status(204).send()
}

module.exports = {
	createFoodPoster,
	getAllPosters,
	getPoster,
	updatePoster,
	deletePoster,
}
