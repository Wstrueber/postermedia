const { scrapeMetaData } = require('../service')
const { Interesting } = require('../models/interesting.model')

const createInterestingPoster = async (req, res, next) => {
	const { body } = req

	let poster

	try {
		poster = await scrapeMetaData(body)
		const post = new Interesting(poster)
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
		posters = await Interesting.find({})
	} catch (err) {
		next(err)
	}
	res.json(posters)
}

const getPoster = async (req, res, next) => {
	const { id } = req.params
	let poster
	try {
		poster = await Interesting.findById(id)
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
		updatedPoster = await Interesting.findByIdAndUpdate(id, body, { new: true })
	} catch (err) {
		next(err)
	}
	res.status(202).json(updatedPoster)
}

const deletePoster = async (req, res, next) => {
	const { id } = req.params
	try {
		await Interesting.findByIdAndDelete(id)
	} catch (err) {
		next(err)
	}
	res.status(204).send()
}

module.exports = {
	createInterestingPoster,
	getAllPosters,
	getPoster,
	updatePoster,
	deletePoster,
}
