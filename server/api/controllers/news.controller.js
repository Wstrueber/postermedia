const { scrapeMetaData } = require('../service')
const { News } = require('../models/news.model')

const createNewsPoster = async (req, res, next) => {
	const { body } = req

	let poster

	try {
		poster = await scrapeMetaData(body)
		const post = new News(poster)
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
		posters = await News.find({})
	} catch (err) {
		next(err)
	}
	res.json(posters)
}

const getPoster = async (req, res, next) => {
	const { id } = req.params
	let poster
	try {
		poster = await News.findById(id)
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
		updatedPoster = await News.findByIdAndUpdate(id, body, { new: true })
	} catch (err) {
		next(err)
	}
	res.status(202).json(updatedPoster)
}

const deletePoster = async (req, res, next) => {
	const { id } = req.params
	try {
		await News.findByIdAndDelete(id)
	} catch (err) {
		next(err)
	}
	res.status(204).send()
}

module.exports = {
	createNewsPoster,
	getAllPosters,
	getPoster,
	updatePoster,
	deletePoster,
}
