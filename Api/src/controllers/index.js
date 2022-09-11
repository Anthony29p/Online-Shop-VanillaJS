const {pool} = require('../database.js');

const getProducts = (req,res) =>{

    pool.query('SELECT * FROM product', function (error, results) {
        if (error) console.log(error);
        res.status(200).json(results);
    })

}

const getCategories = (req,res) =>{

    pool.query('SELECT * FROM category', function (error, results) {
        if (error) console.log(error);
        res.status(200).json(results);
    })
    
}

module.exports = {
    getProducts,
    getCategories,

}