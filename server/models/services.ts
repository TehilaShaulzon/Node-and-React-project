import { Model, DataTypes } from 'sequelize';
import sequelize from '../dataAccess/dataAccess';
import { Business } from './business';

class Services extends Model {
    public id!: number;
    public serviceName!: string;
    public serviceDescription!: string;
    public serviceCost!: number;
    public businessId!: number;
}

Services.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
    businessId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

},
    {
        sequelize,
        tableName: 'services',
    });
Services.belongsTo(Business, { foreignKey: 'businessId' });

export { Services }
