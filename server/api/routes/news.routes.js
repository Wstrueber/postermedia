const router = require('express').Router();
const { news } = require('../controllers');

router
  .route('/')
  .get(news.getAllPosters)
  .post(news.createNewsPoster);
router
  .route('/:id')
  .get(news.getPoster)
  .patch(news.updatePoster)
  .delete(news.deletePoster);

module.exports = router;
