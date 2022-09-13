const { Router } = require('express');
// import * as controllers from '../../controllers/index.js'
const {getProducts,getProductByID} = require('../../controllers/index.js')



const router = Router();

router.get('/:id', getProductByID)
router.get('/', getProducts)


module.exports = router