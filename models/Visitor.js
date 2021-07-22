const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Visitor extends Model {}

Visitor.init({
    visitor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
    },
    message: {
        type: DataTypes.STRING,
    },
},
{
    sequelize,
    timestamps: false,

}
);

module.exports = Visitor;