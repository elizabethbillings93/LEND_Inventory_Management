const router = require('express').Router();

const productRoutes = require('./products-routes')
const employeeRoutes = require("./employee-routes")

router.use('/products', productRoutes);
router.use('/emp', employeeRoutes)

module.exports = router;