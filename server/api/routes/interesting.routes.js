const router = require('express').Router();
const { interesting } = require('../controllers');

router
  .route('/')
  .get(interesting.getAllPosters)
  .post(interesting.createInterestingPoster);
router
  .route('/:id')
  .get(interesting.getPoster)
  .patch(interesting.updatePoster)
  .delete(interesting.deletePoster);

module.exports = router;
