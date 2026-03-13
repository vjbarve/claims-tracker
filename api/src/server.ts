import express from 'express';
import cors from 'cors';
import claimsRouter from './routes/claims';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok'});
});

app.use('/api/claims', claimsRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
