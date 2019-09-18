import customerRoutes from './customer.routes';
import express from 'express';

const app: express.Application = express();

app.use((err: any, req: any, res: any, next: any) => {
  // log the error...
  res.sendStatus(err.httpStatusCode).json(err);
});

app.get('/', (req, res) => {
  res.send('Hello other World!');
});

app.use('/customers', customerRoutes);

export default app;
