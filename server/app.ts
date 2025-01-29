import express from 'express';
import dotenv from 'dotenv';
import setupSwagger from './swaggerConfig';
import usersController from './controllers/usersController';
import businessController from './controllers/businessController';
import servicesController from './controllers/servicesController';
import meetingsController from './controllers/meetingsController';
import { verifyToken } from './middlewares/verifyTokenMiddleware';
import { Request, Response, NextFunction } from 'express';

dotenv.config();
const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());

setupSwagger(app);
app.use('/users', usersController);
app.use(verifyToken);
app.use('/business', businessController);
app.use('/services', servicesController);
app.use('/meetings', meetingsController);

app.use("*", (req, res) => {
    res.status(404).json({ error: "PAGE NOT FOUND" });
});

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error("Error:", err);

    if (err instanceof Error) {
        res.status(500).json({ error: err.message });
    } else {
        res.status(500).json({ error: "Unknown error occurred" });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/docs`);
});
