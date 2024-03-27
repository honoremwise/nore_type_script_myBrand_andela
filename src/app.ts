import express, { Request, Response } from 'express';
import appRoutes from './route';
const app = express();

app.use(express.json());
app.use('/', appRoutes);
export default app;