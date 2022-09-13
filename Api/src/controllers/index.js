const {pool} = require('../database.js');

const getProducts = (req,res) =>{
    const { name,category } = req.query
    try{
        pool.getConnection(function(err,conn){
            conn.query('SELECT p.*, c.name AS categoryName FROM product p INNER JOIN category c ON p.category = c.id', function (error, results) {
                if(name && category){
                    const filteredProducts01 = results.filter(r => r.name.toLowerCase().includes(name.toLowerCase()))
                    if(category==="All"){
                        res.status(200).json(filteredProducts01)
                    }
                    else{
                    const filteredProducts = filteredProducts01.filter(r => r.category===Number(category))
                    res.status(200).json(filteredProducts)
                    }
                    conn.release()
                }
                else if(category && !name){

                    if(category==="All"){
                        res.status(200).json(results)
                    }
                    else{
                    const filteredProducts = results.filter(r => r.category===Number(category))
                    res.status(200).json(filteredProducts)
                    }
                    conn.release()
                }
                else if(name && !category){
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


const getProductByID = (req,res) =>{
    const { id } = req.params
    try{
        pool.getConnection(function(err,conn){
            conn.query('SELECT p.id, p.name, p.url_image, p.price, p.discount, c.name AS category FROM product p INNER JOIN category c ON p.category = c.id', function (error, results) {
                if(id){
                const filteredProducts = results.filter(r => r.id===Number(id))
                res.status(200).json(filteredProducts)
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
    getProductByID,
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