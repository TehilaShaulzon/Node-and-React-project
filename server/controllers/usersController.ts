import { User } from "../models/user";
import { Request, Response } from 'express';

import express from 'express';
const router = express.Router();
router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await User.findOne({
            where: {
                id: 3
            },
            raw: true
        })
        
        if (!users) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(users);
    } catch (err) {
       
            res.status(500).json({ message: 'Internal server error' });
       
        console.error('Error:', err);
    }
});
export default router;