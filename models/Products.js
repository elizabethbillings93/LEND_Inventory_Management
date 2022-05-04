const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Products extends Model {}; 

// Fields & Rules for Product model
Products.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 10,
            allowNull: false,            
        },
        image_link:{
            type:DataTypes.STRING,
            allowNull:false
        },       
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'categories',
                key: 'id',
            },

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