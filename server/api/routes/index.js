const router = require('express').Router()

const foodRouter = require('./food.routes')
const entertainmentRouter = require('./entertainment.routes')
const otherRouter = require('./other.routes')
const newsRouter = require('./news.routes')
const categoriesRoute = require('./categories.routes')

router.use('/food', foodRouter)
router.use('/entertainment', entertainmentRouter)
router.use('/other', otherRouter)
router.use('/news', newsRouter)
router.use('/categories', categoriesRoute)

module.exports = router
