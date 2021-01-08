import { Router } from 'express';

// eslint-disable-next-line import/no-unresolved
import {
  UserController,
  LoginController,
  RouteController,
  ComplaintController,
  TypeComplaintController,
} from './app/controllers';

const routes = new Router();
routes.get('/', (req, res) => res.json({ status: { ok: true } }));

// login logout
routes.post('/login', LoginController.store);
routes.post('/logout', LoginController.logout);

// users
routes.get('/users', UserController.index);
routes.post('/user', UserController.store);
routes.delete('/user/:id', UserController.delete);
routes.put('/user/:id', UserController.updateSecure);

// routes
routes.get('/routes', RouteController.index);
routes.post('/route', RouteController.store);
routes.post('/route', RouteController.update);
routes.post('/route', RouteController.delete);

// complaints da api
routes.get('/complaints', ComplaintController.index);
routes.post('/complaint', ComplaintController.store);

// type complaiint
routes.get('/type', TypeComplaintController.index);
routes.post('/type', TypeComplaintController.store);
routes.put('/type', TypeComplaintController.update);
routes.delete('/type', TypeComplaintController.delete);

// routes.get('/users', UserController.index);

/**
routes.post('/login', LoginController.store);
routes.post('/logout', LoginController.logout);

===> users aqui
routes.get('/users', UserController.index);
routes.get('/user/:id', UserController.singleIndex);
routes.post('/user', UserController.store);
routes.post('/user/:id/technician', UserController.setTechnician);
routes.put('/test/user/:id', UserController.update);
routes.put('/user/:id', UserController.updateSecure);


*/
export default routes;
