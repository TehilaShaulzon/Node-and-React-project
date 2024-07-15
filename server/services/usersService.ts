import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import sequelize from "../dataAccess/dataAccess";
import { CustomError } from '../errors/CustomError';
import _ from 'lodash';

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
export async function addUser(user: User) {
    console.log(user);
    
    user.userPassword = await bcrypt.hash(user.userPassword, 10);
    const token = jwt.sign(
        { user_id: user.id, email: user.userEmail },
        "1234567890",
        {
            expiresIn: "2h",
        }
    );

    const existingUser = await User.findOne({
        where: {
            userEmail: user.userEmail,
        }
    });
    if (existingUser) {
        throw new CustomError('User with the same email already exists', 400);
    }

    await sequelize.authenticate()
    await User.sync();
    const newUser = await User.create({
        userName: user.userName,
        userPassword: user.userPassword,
        userEmail: user.userEmail,
        userToken: token
    });

   const result = await User.findByPk(newUser.id);
    const userWithoutPassword = _.omit(result?.dataValues, ['userPassword','userToken','updatedAt','createdAt']);

    return { user: userWithoutPassword, token: result?.userToken };
}
export async function login(loginEmail:string, loginPassword:string) {
    
    const foundUser = await User.findOne({
        where: {
            userEmail: loginEmail
        }
    });

    if (!foundUser) {
        throw new CustomError('No user found with the given email', 404);
    }

    const passwordMatch = bcrypt.compareSync(loginPassword, foundUser.userPassword);
    if (!passwordMatch) {
        throw new CustomError('Invalid password', 401);
    }

    const newToken = jwt.sign(
        { user_id: foundUser.id, email: foundUser.userEmail },
        `${JWT_SECRET}`,
        {
            expiresIn: "2h",
        }
    );

    await User.update({ token: newToken }, {
        where: { id: foundUser.id }
    });

    const userWithoutPassword = _.omit(foundUser.dataValues, ['userPassword','userToken','createdAt','updatedAt']);

    return { user: userWithoutPassword, token: newToken };
   
}
