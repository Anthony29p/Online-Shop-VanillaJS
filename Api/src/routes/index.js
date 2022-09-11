const { Router } = require('express');

const product = require('./middlewares/product')
const category = require('./middlewares/category')

const router = Router();


router.use('/products',product)
router.use('/categories',category)

module.exports = router