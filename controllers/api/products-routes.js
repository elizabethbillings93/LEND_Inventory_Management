const router = require('express').Router();
const {Categories, Products} = require('../../models')
const hnb = require('handlebars');
const path = require ('path');

// The /api/products endpoint

// Get All Products
router.get('/products', (req, res) => {
    Products.findAll({
        include: [Categories],
    })
    .then((products => res.json(products))
    .then(data => res.render('product', {data}))
    .catch(err)
});

// Get One Product 
router.get('products/:id'), (req,res) => {
    Products.findOne({
        where: {
            id: req.params.id
        },
        include: [Categories],
    })
    .then((products) => res.json(products))
    .then(data => res.render('product', {data}))
    .catch(err)
}

// Update Product
router.put('products/:id'), (req, res) => {
    //update product data
    Products.update(req.body, {
        where: {
            id: req.params.id
        },
    })
    .then((product) => {
        if (req.body.)
    })

}



// console.log('Working');
// router.get('/', async(req,res) => {
//     res.render('login');
    
// });




module.exports = router;
