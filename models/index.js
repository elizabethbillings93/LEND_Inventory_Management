const Products = require('./Products');
const Categories = require('./Categories');
const Employee = require('./Employee')

//Products belongsTo Category
Products.belongsTo(Categories, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

// Categories have many Products
Categories.hasMany(Products, {
    foreignKey: 'category_id'
});



module.exports = {Products, Categories, Employee};