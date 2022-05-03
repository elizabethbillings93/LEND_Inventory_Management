const Products = require('./Products');
const Dairy = require('./Dairy');
const Employee = require('./Employee');
const Meat = require('./Meat');
const Pantry = require('./Pantry');
const Produce = require('./Produce');

Products.hasMany(Dairy, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});

Dairy.belongsTo(Products, {
    foreignKey: 'product_id'
});



Products.hasMany(Meat, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});


Meat.belongsTo(Products, {
    foreignKey: 'product_id'
});


Products.hasMany(Pantry, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});

Pantry.belongsTo(Products, {
    foreignKey: 'product_id'
});



Products.hasMany(Produce, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});

Produce.belongsTo(Products, {
    foreignKey: 'product_id'
});

module.exports = {Products, Dairy, Employee, Meat, Pantry, Produce};