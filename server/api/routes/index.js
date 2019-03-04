const router = require('express').Router();

const foodRouter = require('./food.routes');
const entertainmentRouter = require('./entertainment.routes');
const interestingRouter = require('./interesting.routes');
const newsRouter = require('./news.routes');
const categoriesRoute = require('./categories.routes');

router.use('/food', foodRouter);
router.use('/entertainment', entertainmentRouter);
router.use('/interesting', interestingRouter);
router.use('/news', newsRouter);
router.use('/categories', categoriesRoute);

module.exports = router;
