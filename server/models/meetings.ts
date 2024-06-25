import  sequelize  from '../dataAccess/dataAccess';
import { DataTypes } from 'sequelize';
import { Business } from './business';
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
  export {Meetings}
