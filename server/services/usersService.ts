// import { User } from '../models/user';
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// import sequelize from "../dataAccess/dataAccess";
// async function addUser(user:User) {
//     user.password = await bcrypt.hash(user.password, 10);
//     const token = jwt.sign(
//         { user_id: user.id, name: user.name },
//         "1234567890",
//         {
//             expiresIn: "2h",
//         }
//     );
//     try {
//         const existingUser = await User.findOne({
//             where: {
//                 name: user.name,
//             }
//         });
//         if (existingUser) {
//             throw new Error('User with the same name already exists');
//         }
//         const maxId = await User.max('id');
//         user.id = maxId + 1;
//         sequelize.authenticate().then(async () => {
//             await User.sync();
//             const newUser = await User.create({
//                 id: user.id,
//                 name: user.name,
//                 password: user.password,
//                 email: user.email,
//                 token: token
//             });
//         });
//         return `data added: ${JSON.stringify(user)}`;
//     }
//     catch (error) {
//         console.error('Error adding user:', error.message);
//         return `Error adding user: ${error.message}`;
//     }
// }
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
