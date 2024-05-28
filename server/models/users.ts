import { sequelize } from '../dataAccess/dataAccess';
import { DataTypes } from 'sequelize';
export const Users = sequelize.define('Users', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
      }
    
});
