import sequelize from '../dataAccess/dataAccess';
import { DataTypes } from 'sequelize';
import { Business } from './business';

 const Services = sequelize.define('Services', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    serviceName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    serviceDescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    serviceCost: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
    businessId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

});
Services.belongsTo(Business, { foreignKey: 'businessId' });

export {Services}
