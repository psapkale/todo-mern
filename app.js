import express, { query } from 'express';
import userRouter from './routes/user.js';
import taskRouter from './routes/task.js';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/error.js';
import cors from 'cors';

config({
   path: './data/config.env',
});

export const app = express();

app.use(express.json()); // Make sure to use express.json() before router or else any route specified can not access json data
app.use(cookieParser());
// Middleware to communicate between frontend and backend
app.use(
   cors({
      origin: [process.env.FRONTEND_URL],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
   })
);

app.get('/', (req, res) => {
   res.send('Nice Working');
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/task', taskRouter);
app.use(errorMiddleware);
