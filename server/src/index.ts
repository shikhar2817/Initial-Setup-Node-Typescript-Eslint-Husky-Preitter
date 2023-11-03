import { Request, Response } from 'express';
import cors from 'cors';
import { PORT } from './env';
import expressConfig from './express.config';

const app = expressConfig();

// CORS SETUP

app.use(
    cors({
        credentials: true,
    }),
);

app.listen(PORT, () => console.log('Server Running on Port ' + PORT));

app.get('/api/health', (_req: Request, res: Response) => {
    try {
        res.status(200).json({ message: 'System is healthy 🟢' });
    } catch (error: unknown) {
        console.log('Server Failed: ', error);
        res.status(500).json({ message: 'System is Sick 🔴' });
    }
});

