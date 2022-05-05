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
    const employee = employeeData.get({ plain: true});
    res.render('inventory', {
        ...employee,
        logged_in: true 
    });

    const categoryData = await Categories.findAll()

    const categories = categoryData.map((category) => category.get({plain: true}));
    res.render('inventory', {categories})
    } catch (err) {
        res.status(500).json(err);
    }



router.get('/meats', withAuth, async(req,res)=> {
    try {
        // Find the logged in user based on session ID
        const employeeData = await Employee.findByPk(req.session.user_id,{
            attributes: { exclude: ['password'] },           
        });
    const employee = employeeData.get({ plain: true});
    res.render('meats', {
        ...employee,
        logged_in: true 
    });

    const categoryData = await Categories.findAll()

    const categories = categoryData.map((cataegory) => cataegory.get({plain: true}));
    res.render('meats', {categories})
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/dairy', withAuth, async(req,res)=> {
    try {
        // Find the logged in user based on session ID
        const employeeData = await Employee.findByPk(req.session.user_id,{
            attributes: { exclude: ['password'] },           
        });
    const employee = employeeData.get({ plain: true});
    res.render('dairy', {
        ...employee,
        logged_in: true 
    });

    const categoryData = await Categories.findAll()

    const categories = categoryData.map((category) => category.get({plain: true}));
    res.render('dairy', {categories})
    } catch (err) {
        res.status(500).json(err);
    }
})


});

module.exports = router; 