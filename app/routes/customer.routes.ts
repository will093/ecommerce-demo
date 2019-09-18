import customerActions from '../actions/customer.actions';
import express from 'express';

const app: express.Application = express();

app.get('/', async (req, res) => {
  const customers = await customerActions.listAll();
  res.send(customers);
});

app.get('/:id([0-9]+)', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const customers = await customerActions.findOneById(id);
    res.send(customers);
  } catch (error) {
    res.status(404).send(error);
  }
});

export default app;
