const router = require('express').Router();

const employeeRoutes = require('./employee-routes')


router.use('/emp', employeeRoutes)

module.exports = router;