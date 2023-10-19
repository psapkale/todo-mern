import express, { query } from 'express';
import router from './routes/user.js';
import { config } from 'dotenv';

config({
   path: './data/config.env',
});

export const app = express();

app.use(express.json());

app.get('/', (req, res) => {
   res.send('Nice Working');
});

app.use('/users', router);
