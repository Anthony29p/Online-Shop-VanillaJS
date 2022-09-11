const { Router } = require('express');
// import * as controllers from '../../controllers/index.js'
const {getProducts} = require('../../controllers/index.js')

const router = Router();

router.get('/', getProducts)



module.exports = router