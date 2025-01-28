import { Model, DataTypes, INTEGER } from 'sequelize';
import sequelize from '../dataAccess/dataAccess';
import { User } from './user';
import { Services } from './services';
class Meetings extends Model {
  public id!: number;
  public meetingDate!: Date;
  public userId!: number;
  public serviceId!:number;
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
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,

  },
  serviceId: {
    type: DataTypes.INTEGER,
    allowNull: false,

  }
},

  {
    sequelize,
    tableName: 'meetings',
  });

Meetings.belongsTo(User, { foreignKey: 'userId' });
Meetings.belongsTo(Services, { foreignKey: 'serviceId' });
export { Meetings };


