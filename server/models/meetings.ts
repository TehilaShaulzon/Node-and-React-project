import { Model, DataTypes, INTEGER } from 'sequelize';
import sequelize from '../dataAccess/dataAccess';
import { Business } from './business';
import { User } from './user';
class Meetings extends Model {
  public id!: number;
  public meetingDate!: Date;
  public userId!: number;
};
Meetings.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  meetingDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  custId: {
    type: DataTypes.INTEGER,
    allowNull: false,

  }
},

  {
    sequelize,
    tableName: 'meetings',
  });

Meetings.belongsTo(User, { foreignKey: 'custId' });
export { Meetings };


