import { Business } from "../models/business";
import sequelize from "../dataAccess/dataAccess";
import { CustomError } from "../errors/CustomError";

export async function addBusiness(newBusiness: Business) {
 
    await sequelize.authenticate();
    await Business.sync();

    const business = await Business.create({
        businessName: newBusiness.businessName,
        businessDescription: newBusiness.businessDescription,
        businessEmail: newBusiness.businessEmail,
        businessPhone: newBusiness.businessPhone
    });

    const result = await Business.findByPk(business.id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    });

    return result;
}



export async function updateBusiness(businessId: number, updatedBusiness: Partial<Business>) {
    try {
        const business = await Business.findOne({
            where: { id: businessId }
        });

        if (!business) {
            throw new CustomError('Business not found', 404);
        }

       
        await business.update(updatedBusiness);

        const { createdAt, updatedAt, ...result } = business.get();

        return result;
    } catch (error: any) {
        console.error('Error updating Business:', error.message);
        throw new CustomError(error.message, error.statusCode || 500);
    }
}

