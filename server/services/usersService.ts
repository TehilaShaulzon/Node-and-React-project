import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import sequelize from "../dataAccess/dataAccess";
import { CustomError } from '../errors/CustomError';
export async function addUser(user: User) {
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
            name: user.userName,
        }
    });
    if (existingUser) {
        throw new CustomError('User with the same name already exists', 400);
    }

    await sequelize.authenticate()
    await User.sync();
    const newUser = await User.create({
        name: user.userName,
        password: user.userPassword,
        email: user.userEmail,
        token: token
    });

   const result = await User.findByPk(newUser.id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    });
    return result;
}
// async function login(loginName, loginPassword) {
//     try {
//         const users = await User.findAll({
//             where: {
//                 name: loginName
//             }
//         });
//         if (users.length === 0) {
//             throw new Error('No user found with the given name');
//         }
//         console.log("users " + users);
//         const user = users.find(u => bcrypt.compareSync(loginPassword, u.password));
//         if (!user) {
//             throw new Error('Invalid password');
//         }
//         const newToken = jwt.sign(
//             { user_id: user.id, name: user.name },
//             "1234567890",
//             {
//                 expiresIn: "2h",
//             }
//         );
//         const updatedUser = await User.update({ token: newToken }, {
//             where: { id: user.id }
//         });
//         return { user: user, token: newToken };
//     } catch (err) {
//         console.error('Error authenticating user', err);
//         throw err;
//     }
// }
// module.exports = { addUser, login };
