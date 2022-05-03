const sequelize = require('../config/connection');
const { Products, Dairy, Employee, Meat, Pantry, Produce } = require('../models');

const productsData = require('./products.json');
const dairyData = require('./dairy.json');
const employeeData = require('./employee.json');
const meatData = require('./meat.json');
const pantryData = require('./pantry.json');
const produceData = require('./produce.json');



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
