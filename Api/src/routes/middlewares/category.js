const { Router } = require('express');
const {getCategories} = require('../../controllers/index.js')


const router = Router();

router.get('/', getCategories)


module.exports = router