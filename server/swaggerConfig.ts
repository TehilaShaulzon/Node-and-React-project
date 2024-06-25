import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
  },
  apis: ['./controllers/*.ts'], // הנתיב לקבצי ה-API שלך
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app: Express) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
