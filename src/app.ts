import express, { Request, Response } from 'express';
import cors from 'cors';



const app = express();

import routes from './routes';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes); // Mount all API routes under /api

app.get('/', (req: Request, res: Response) => {
    res.send('API is running...');
});

export default app;
