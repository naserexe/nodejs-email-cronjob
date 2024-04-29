import express from 'express';
import handleError from './middlewares/handleError.js';
import configureAllRoutes from './api/routes/index.js';

const app = express();

app.use(express.json());

configureAllRoutes(app);

app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is up and running 🚀',
  });
});

app.use(handleError);

app.all('*', (req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

export default app;
