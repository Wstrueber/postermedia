const router = require('express').Router();
const { food } = require('../controllers');

router
  .route('/')
  .get(food.getAllPosters)
  .post(food.createFoodPoster);
router
  .route('/:id')
  .get(food.getPoster)
  .patch(food.updatePoster)
  .delete(food.deletePoster);

module.exports = router;
