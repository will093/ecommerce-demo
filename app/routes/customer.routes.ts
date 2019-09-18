import { customerActions } from '../actions/customer.actions';
import express from 'express';
import { wrapAsync } from '../helpers/wrap-async';

const app: express.Application = express();

app.get('/',  wrapAsync(async (req, res) => {
  const customers = await customerActions.listAll();
  res.send(customers);
}));

app.get('/:id([0-9]+)', wrapAsync(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const customers = await customerActions.findOneById(id);
  res.send(customers);
}));

export default app;
