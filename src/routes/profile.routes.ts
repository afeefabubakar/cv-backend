import {
  getAllProfiles,
  getProfileById,
} from '@controllers/profile.controller';
import RoutesClass from './RoutesClass';

class ProfileRoutes extends RoutesClass {
  constructor() {
    super();
  }

  initializeRouter(): void {
    this.router.get('/', getAllProfiles);
    this.router.get('/:id', getProfileById);
  }
}

export default new ProfileRoutes().router;
