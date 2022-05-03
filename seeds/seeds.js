const sequelize = require('../config/connection');
const { Employee, Products } = require('../models');

const productsData = require('./products.json');
const employeeData = require('./employee.json');


// TODO - I was working on inserting the seed data (using Jungs video around 45 mins in) (DG)
// const injectData = async () => {
//     await sequelize.sync({force: true})

//     const employees = await Employee.bulkCreate(employeeData);

//     for (const )
// };

// injectData();