import 'reflect-metadata';

import { createConnection } from 'typeorm';
import express from 'express';
import routes from './routes';

// Create a new express application instance
const app: express.Application = express();

app.use((err: { httpStatusCode: any; }, req: any, res: any, next: any) => {
  // log the error...
  res.sendStatus(err.httpStatusCode).json(err);
});

// Connect to the db - this uses the ormconfig.json config file.
createConnection().then(async (connection) => {
  // Initialise routing.
  app.use(routes);

  // Listen for requests.
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
}).catch(error => console.log(error));
