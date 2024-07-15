import { User } from "../models/user";
import { Request, Response } from 'express';

import express from 'express';
import { addUser, login } from "../services/usersService";
import { CustomError } from "../errors/CustomError";
const router = express.Router();
// router.get('/', async (req: Request, res: Response) => {
//     try {
//         const users = await User.findOne({
//             where: {
//                 id: 3
//             },
//             raw: true
//         })
        
//         if (!users) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.status(200).json(users);
//     } catch (err) {
       
//             res.status(500).json({ message: 'Internal server error' });
       
//         console.error('Error:', err);
//     }
// });

router.post('/signUp', async (req: Request, res: Response) => {
    try {
        const result = await addUser(req.body);
        res.status(201).json(result);
    } catch (err: any) {
        if (err instanceof CustomError) {
            res.status(err.statusCode).send(err.message);
        } else {
            res.status(500).send('Internal Server Error');
        }
        console.error('Error:', err);
    }
});
router.post('/login', async (req: Request, res: Response) => {
    try {
        const { loginEmail, loginPassword } = req.body;
        const result = await login(loginEmail, loginPassword);
        res.status(200).json(result);
    } catch (err: any) {
        if (err instanceof CustomError) {
            res.status(err.statusCode).send(err.message);
        } else {
            res.status(500).send('Internal Server Error');
        }
        console.error('Error:', err);
    }
});
export default router;