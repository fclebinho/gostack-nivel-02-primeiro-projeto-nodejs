import { Router } from 'express';

export const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Hello World' }),
);

export default routes;
