import 'reflect-metadata';

import { createConnection } from 'typeorm';
import { entityNotFoundErrorHandler } from './middleware/error-handlers';
import express from 'express';
import routes from './routes';

// Create a new express application instance
const app: express.Application = express();

// Connect to the db - this uses the ormconfig.json config file.
createConnection().then(async (connection) => {
  // Initialise routing.
  app.use(routes);

  // Error handling middleware
  app.use(entityNotFoundErrorHandler);

  // Listen for requests.
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
}).catch(error => console.log(error));
