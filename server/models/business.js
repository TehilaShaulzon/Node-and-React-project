const sequelize  =require('../dataAccess/dataAccess');
const { DataTypes } =require('sequelize');
const { Users }     =require('./users');
 const Business = sequelize.define('Business', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    businessName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    businessDescription: {
        type: DataTypes.STRING,
        allowNull: false
      },
    businessEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    businessPhone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
});
Business.belongsTo(Users, { foreignKey: 'userId' });
exports.Business=Business;