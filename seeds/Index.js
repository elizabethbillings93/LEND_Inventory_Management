const sequelize = require('../config/connection');
const { Employee, Products } = require('../models');

const productsData = require('./products.json');
const employeeData = require('./employee.json');



const injectData = async () => {
    await sequelize.sync({force: true})

    const employees = await Employee.bulkCreate(employeeData);

    for (const employee of employeeData) {
        await Employee.create({
            ...employee
        

        });
    } 

    process.exit(0);
};

injectData();