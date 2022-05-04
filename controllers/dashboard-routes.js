const router = require('express').Router();


router.get('/products', (req, res) => {
    console.log('Products is working')
    
})

router.get('/products/:id', (req, res) => {
    console.log('Products with id params is working')
});

router.get('products/:id/:productid', (req, res) => {
    console.log('Products where id params productid is working.')
});

// router.post()

module.exports = router; 