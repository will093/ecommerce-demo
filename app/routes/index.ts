import customerRoutes from './customer.routes';
import express from 'express';

const app: express.Application = express();

app.get('/', (req, res) => {
  res.send('Hello other World!');
});

app.use('/customers', customerRoutes);

export default app;
