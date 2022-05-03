const router = require('express').Router();
const hnb = require('handlebars');
const app= express();

router.get('/', async(req,res) => {
    res.render('main');
    
});
app.get('/', (req,res)=>{
    res.render('main');
});

module.exports = router;
