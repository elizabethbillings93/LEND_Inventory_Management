const router = require('express').Router();
const { Employee } = require('../../models');


router.get('/login', (req, res) => {
    res.render('login')  
})

router.post('/login', async (req, res) =>{
    try {
        const employeeData = await Employee.findOne({ where: { email: req.body.email } });
    
        if (!employeeData) {
          res.status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        const validPassword = await employeeData.checkPassword(req.body.password);        
         
        if (!validPassword) {
          res.status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
    
        req.session.save(() => {
          req.session.user_id = employeeData.id;
          req.session.logged_in = true;
          res.json({ employee: employeeData, message: 'Thanks for logging in' });
        });

        
    
      } catch (err) {
        res.status(400).json(err);
      }
});
  
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



router.get('/onboard', (req, res) => {
  res.render('onboard')
});


module.exports = router;