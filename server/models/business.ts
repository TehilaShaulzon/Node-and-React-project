import sequelize  from '../dataAccess/dataAccess';
import { DataTypes } from 'sequelize';
import { Users } from './users';

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
    }
});

Business.belongsTo(Users, { foreignKey: 'userId' });

export { Business };
