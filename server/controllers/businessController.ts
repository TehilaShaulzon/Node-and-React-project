import { addBusiness } from "../services/businessService";
import { Request, Response } from 'express';
import {  CustomError } from "../errors/CustomError"

const express = require('express');
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const result = await addBusiness(req.body);
        res.send(result);
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
