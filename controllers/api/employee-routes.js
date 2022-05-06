const router = require('express').Router();
const { Employee } = require('../../models');





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
  if (req.session.logged_in ) {
    res.render('onboard', {
      logged_in: true
    });
  };
  res.render('login')
});
router.post('/onboard', (req, res) => {
  try{
    Employee.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    manager_id: 1,
    email: req.body.email,
    phone_number: req.body.phone_number,
    password: req.body.password,
    })
    .then((newEmployee) => {
      res.json(newEmployee)
    });
  } catch (err) {
    res.status(500).json(err);
  };
});


module.exports = router;