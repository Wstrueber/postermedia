const router = require('express').Router();
const { entertainment } = require('../controllers/');

router
  .route('/')
  .get(entertainment.getAllPosters)
  .post(entertainment.createEntertainmentPoster);
router
  .route('/:id')
  .get(entertainment.getPoster)
  .patch(entertainment.updatePoster)
  .delete(entertainment.deletePoster);

module.exports = router;
