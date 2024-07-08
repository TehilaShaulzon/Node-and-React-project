import { Business } from "../models/business";
import sequelize from "../dataAccess/dataAccess";
import { User } from "../models/user";
import { CustomError } from "../errors/CustomError";

export async function addBusiness(newBusiness: Business) {
    const existingBusiness = await Business.findOne({
        where: {
            businessName: newBusiness.businessName,
        }
    });
    if (existingBusiness) {
        throw new CustomError('Business with the same name already exists',400);
    }

    const userExists = await User.findOne({
        where: { id: newBusiness.userId }
    });
    if (!userExists) {
        throw new CustomError('User with the given userId does not exist',404);
    }

    await sequelize.authenticate();
    await Business.sync();

    const business = await Business.create({
        userId: newBusiness.userId,
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



export async function updateBusiness(businessId: number, userId: number, updatedBusiness: Partial<Business>) {
    try {
        const business = await Business.findOne({
            where: { id: businessId }
        });

        if (!business) {
            throw new CustomError('Business not found', 404);
        }

        if (business.userId !== userId) {
            throw new CustomError('Error in user Id', 403);
        }

        await business.update(updatedBusiness);

        const { createdAt, updatedAt, ...result } = business.get();

        return result;
    } catch (error: any) {
        console.error('Error updating Business:', error.message);
        throw new CustomError(error.message, error.statusCode || 500);
    }
}

