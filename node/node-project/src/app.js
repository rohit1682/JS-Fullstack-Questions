import express from 'express';
import { router } from './routes/notes.routes';
import { errorMiddleware } from './middlewares/error.middleware';

export const app = express();

app.use(cors);
app.use(express.json())
app.use('/notes', router);
app.use(errorMiddleware);
