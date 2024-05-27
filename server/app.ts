import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv'
dotenv.config()
const port=process.env.PORT||8000
const app: Application = express();



app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
