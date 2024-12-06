import { Router } from 'express';
import RoutesClass from './RoutesClass';
import profileRoutes from './profile.routes';

class RootRoutes extends RoutesClass {
  constructor() {
    super();
  }

  initializeRouter() {
    const api = Router();
    this.router.get('/', (req, res) => {
      res.json({
        message: "Afeef's CV Backend",
      });
    });
    this.router.use('/api', api);
    api.use('/profile', profileRoutes);
  }
}

export default new RootRoutes().router;
