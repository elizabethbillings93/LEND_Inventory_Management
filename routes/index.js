// const loginroutes = require('./api/login-routes')
// const dashboardroutes = require('./dashboard-routes')
// const loginroutes = require('./api/login-routes')

const router = require('express').Router();

//TODO - This is pseudo coded. Need to go back and fix this (DG)
router.get('/login', (req, res) => {
    console.log('Products is working')
    res.json("This is the login page")
    
});
    

// router.get('/products/:id', (req, res) => {
//     console.log('Products with id params is working')
// });

// router.get('products/:id/:productid', (req, res) => {
//     console.log('Products where id params productid is working.')
// });

// router.post()

module.exports = router; 