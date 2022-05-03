const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model {}; 

Products.init(
    {
    
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        // TODO  - I think we need something to reference
        product_id: {
            type: DataTypes.STRING,
            references: ''

        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,            
        },
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'products'
    }
);

module.exports = Products;