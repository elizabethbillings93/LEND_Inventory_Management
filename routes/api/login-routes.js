const router = require('express').Router();


router.get('/login', (req, res) => {
    res.render('login')
})
    

router.get('/onboard', (req, res) => {
    console.log('Onboard is working')
});

module.exports = loginRouter;