const router = require('express').Router();


router.get('/login', (req, res) => {
    res.render('login')  
})

router.post('/login', async (req, res) =>{

    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
    
        if (!userData) {
          res.status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        const validPassword = await userData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res.status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          
          res.json({ user: userData, message: 'Thanks for logging in' });
        });
    
      } catch (err) {
        res.status(400).json(err);
      }
});
    

router.get('/onboard', (req, res) => {
    console.log('Onboard is working')
});



module.exports = router;