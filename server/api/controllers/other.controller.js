const { scrapeMetaData } = require('../service')
const { Other } = require('../models/other.model')

const createOtherPoster = async (req, res, next) => {
	const { body } = req

	let poster

	try {
		poster = await scrapeMetaData(body)
		const post = new Other(poster)
		post.save()
		console.log(post)
		console.log('/other')
	} catch (err) {
		next(err)
	}

	res.status(201).json(poster)
}

const getAllPosters = async (req, res, next) => {
	let posters
	try {
		posters = await Other.find({})
	} catch (err) {
		next(err)
	}
	res.json(posters)
}

const getPoster = async (req, res, next) => {
	const { id } = req.params
	let poster
	try {
		poster = await Other.findById(id)
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
		updatedPoster = await Other.findByIdAndUpdate(id, body, { new: true })
	} catch (err) {
		next(err)
	}
	res.status(202).json(updatedPoster)
}

const deletePoster = async (req, res, next) => {
	const { id } = req.params
	try {
		await Other.findByIdAndDelete(id)
	} catch (err) {
		next(err)
	}
	res.status(204).send()
}

module.exports = {
	createOtherPoster,
	getAllPosters,
	getPoster,
	updatePoster,
	deletePoster,
}
