import { getProfiles } from '@controllers/profile.controller';
import RoutesClass from './RoutesClass';

class ProfileRoutes extends RoutesClass {
  constructor() {
    super();
  }

  initializeRouter(): void {
    this.router.get('/', getProfiles);
  }
}

export default new ProfileRoutes().router;
