const sequelize = require('../config/connection');
const { Products, Catagories, Employee} = require('../models');

const productsData = require('./products-seeds');
const catagoryData = require('./category-seeds');
const employeeData = require('./employee.json');




const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await Employee.bulkCreate(employeeData, {
      individualHooks: true,
      returning: true,
    });
  
    await Products.bulkCreate(productsData);

    await Dairy.bulkCreate(dairyData);

    await Meat.bulkCreate(meatData);

    await Pantry.bulkCreate(pantryData);

    await Produce.bulkCreate(produceData);
    
};

seedDatabase();