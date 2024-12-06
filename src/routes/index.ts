import { Router } from 'express';
import RoutesClass from './RoutesClass';

class RootRoutes extends RoutesClass {
  constructor() {
    super();
  }

  api = this.router.use('/api', Router());

  initializeRoutes() {}
}

export default new RootRoutes().router;
