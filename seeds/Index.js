const sequelize = require('../config/connection');
const { Categories, Products, Employee} = require('../models');

// Products, Catagories,
const productData = require('./products-seeds.json');
const categoryData = require('./category-seeds.json');
const employeeData = require('./employee.json');




const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await Employee.bulkCreate(employeeData, {
      individualHooks: true,
      returning: true,
    });

    await Categories.bulkCreate(categoryData,{
      individualHooks: true,
      returning: true,
    });

    await Products.bulkCreate(productData, { 
      individualHooks: true,
      returning: true,
    });

};

seedDatabase();
