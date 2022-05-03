const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Employee extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    };
}; 

Employee.init(
    {
    
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        manager_id: {
            type: DataTypes.INTEGER,
            allowNull: true, 
            references: {
                model: 'employee',
                key: 'id',
              },           
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                leng: [10],
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                leng: [8],
            },
        },
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee'
    }
);

module.exports = Employee;