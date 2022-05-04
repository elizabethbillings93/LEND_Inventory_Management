const router = require('express').Router();


router.get('/products', (req, res) => {
    console.log('Products is working')
})
    .then();

router.get('/products/:id', (req, res) => {
    console.log('Products with id params is working')
});

router.get('/products/:id/:productid', (req, res) => {
    console.log('Products where id params productid is working.')
});

router.get('/employees', (req, res) => {
    console.log('Employees is wokring.')
});

router.get('/employees:id', (req, res) => {
    console.log('Employees is wokring.')
});

module.exports = managerRouter;