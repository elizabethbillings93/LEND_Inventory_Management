const router = require('express').Router();
const hnb = require('handlebars');

router.get('/', async(req,res) => {
    res.render('main');
    
});


module.exports = router;
