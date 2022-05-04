const Employee = require('./Employee')
// const Categories = require('./Categories');
// const Products = require('./Products');


// Categories have many Products
// Categories.hasMany(Products, {
//     foreignKey: 'category_id'
// });

// //Products belongsTo Category
// Products.belongsTo(Categories, {
//     foreignKey: 'category_id',
//     onDelete: 'CASCADE'
// });

module.exports = { Employee };
// Products, Categories,