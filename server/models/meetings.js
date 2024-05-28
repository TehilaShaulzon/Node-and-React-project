
const sequelize =require('../dataAccess/dataAccess');
const { DataTypes }=require('sequelize');
const { Business }= require('./business');
 const Meetings = sequelize.define('Meetings', {
    id: {
      primaryKey:true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    businessId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    meetingDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
  });
  Meetings.belongsTo(Business, { foreignKey: 'businessId' });
  exports.Meetings=Meetings
