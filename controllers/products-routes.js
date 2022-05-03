const router = require('express').Router();
const hnb = require('handlebars');
const path = require ('path');

console.log('Working');
router.get('/', async(req,res) => {
    res.render('login');
    
});




module.exports = router;
