import { Router } from 'express';

// eslint-disable-next-line import/no-unresolved
import { UserController, LoginController } from './app/controllers';

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



routes.get('/technicians', TechnicianController.index);
routes.delete('/technician/:id', TechnicianController.delete);
routes.put('/technician/:id', TechnicianController.update);
routes.get('/technician/:tec_id/os', TechnicianController.getOsByTec);

routes.get('/problems', ProblemController.index);
routes.post('/problem', ProblemController.store);
routes.put('/problem/:id', ProblemController.update);
routes.delete('/problem/:id', ProblemController.delete);

routes.get('/localities', LocalityController.index);
routes.post('/locality', LocalityController.store);
routes.post('/locality/:id/problem', LocalityController.addProblem);



routes.get('/os', ServiceOrderController.index);
routes.get('/os/search', ServiceOrderController.search);
routes.post('/os', ServiceOrderController.store);
routes.post('/os/:id/equipment', ServiceOrderController.setEquipment);
routes.post('/os/:id/technician/:tec_id', ServiceOrderController.setTechnician);
routes.delete(
  '/os/:id/technician/:tec_id',
  ServiceOrderController.unsetTechnician
);
routes.put('/os/:id', ServiceOrderController.update);
routes.put('/os/open/:id', ServiceOrderController.openSo);
routes.put('/os/close/:id', ServiceOrderController.closeSo);
routes.put('/os/cancel/:id', ServiceOrderController.cancelSo);
routes.delete('/os/:id', ServiceOrderController.delete);
routes.delete('/os/:id/equipment', ServiceOrderController.unsetEquipment);

routes.post('/os/:os_id/companion/:tec_id', CompanionController.add);
routes.delete('/os/:os_id/companion/:tec_id', CompanionController.delete);
*/
export default routes;
