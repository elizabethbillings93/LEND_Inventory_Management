const router = require('express').Router();
const {Categories, Employee, Products} = require('../models');
const withAuth = require('../utils/auth');

//Redirect to Login
router.get('/', async (req,res) => {
    res.redirect('/login')

})

// If you're already logged in, redirect to products. Otherwise, login.
router.get('/login', (req, res) => {
       if (req.session.logged_in) {
        res.redirect('/products');
        return;
    }

    res.render('login')  
})

// Use withAuth middleware to prevent access to route so you can't get in without login.
router.get('/products', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on session ID
        const employeeData = await Employee.findByPk(req.session.user_id,{
            attributes: { exclude: ['password'] },           
        });


        const categoryData = await Categories.findAll()
   
        const categories = categoryData.map((cataegory) => cataegory.get({plain: true}));
       

    const employee = employeeData.get({ plain: true});
    console.log(employee)
    res.render('inventory', {
        ...employee,
        categories,
        logged_in: true 
    });

    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router; 