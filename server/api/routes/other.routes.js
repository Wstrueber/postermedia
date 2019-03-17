const router = require('express').Router()
const { other } = require('../controllers')

router
	.route('/')
	.get(other.getAllPosters)
	.post(other.createOtherPoster)
router
	.route('/:id')
	.get(other.getPoster)
	.patch(other.updatePoster)
	.delete(other.deletePoster)

module.exports = router
