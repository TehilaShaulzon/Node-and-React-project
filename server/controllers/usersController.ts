import { Users } from "../models/users";
import { Request, Response } from 'express';

import express from 'express';
const router = express.Router();
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns a list of users
 *     responses:
 *       200:
 *         description: A JSON array of user names
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.get('/', async (req:Request, res:Response) => {
    try {
        const users = await Users.findAll({
            raw: true
        })
        res.json(users)

}
    catch (err) {
        res.send(err);
        console.error('Error:', err);
    }
});
export default router;