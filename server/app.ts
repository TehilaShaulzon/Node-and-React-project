import express from 'express';
import dotenv from 'dotenv'
import { User } from './models/user';
import setupSwagger from './swaggerConfig';
import usersController from './controllers/usersController';
import businessController from './controllers/businessController';
import servicesController from './controllers/servicesController'
import meetingsController from './controllers/meetingsController';
dotenv.config()
const port=process.env.PORT||8000
const app= express();
app.use(express.json());

setupSwagger(app);
app.use('/users', usersController);
app.use('/business', businessController);
app.use('/services', servicesController);
app.use('/meetings', meetingsController);

app.listen(port, async () => {
    console.log(`Server is running at http://localhost:${port}/docs`);

});



