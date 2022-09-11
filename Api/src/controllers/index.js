const {pool} = require('../database.js');

const getProducts = (req,res) =>{
    const { name } = req.query
    try{
        pool.getConnection(function(err,conn){
            conn.query('SELECT * FROM product', function (error, results) {
                if(name){
                const filteredProducts = results.filter(r => r.name.toLowerCase().includes(name.toLowerCase()))
                res.status(200).json(filteredProducts)
                conn.release()
                }
                else{
                res.status(200).json(results)
                conn.release()
                }
            })
        })
    }
    catch(error){
        res.status(400).send('Error ocurred at product')
    }
}

const getCategories = (req,res) =>{
    try{
        pool.getConnection(function(error1,conn){
            conn.query('SELECT * FROM category', function (error2, results) {
                res.status(200).json(results)
                conn.release()
            })
        })
    }
    catch(error){
        res.status(400).send('Error ocurred at category')
    }
}

module.exports = {
    getProducts,
    getCategories,

}

//other syntax for getting products

// pool.getConnection(function(err,conn){
//     if(err){res.send('Error ocurred')
//     }
//     else{
//         conn.query('SELECT * FROM product', function (error, results) {
//             if (!error){
//             res.status(200).json(results)};
//             conn.release();
//         })
//     }
// })

// pool.query('SELECT * FROM product', function (error, results) {
//     if (!error) res.status(200).json(results);
// })