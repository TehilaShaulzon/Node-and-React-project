import { Model, DataTypes } from 'sequelize';
import sequelize from '../dataAccess/dataAccess';
import { Business } from './business';
class Meetings extends Model {
  public id!: number;

  public businessId!: number;
  public meetingDate!: Date;
}
Meetings.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
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
},
  {
    sequelize,
    tableName: 'meetings',
  });

Meetings.belongsTo(Business, { foreignKey: 'businessId' });
export { Meetings };


