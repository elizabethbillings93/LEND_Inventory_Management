const router = require('express').Router();


router.get('/login', (req, res) => {
    console.log('Login is working')
})
    .then();

router.get('/onboard', (req, res) => {
    console.log('Onboard is working')
});

module.exports = loginRouter;