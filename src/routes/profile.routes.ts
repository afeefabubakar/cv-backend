import {
  handleGetAllProfiles,
  handleGetSpecificProfile,
  processUpdateProfile,
} from '@controllers/profile.controller';
import { Router } from 'express';

const router = Router();

router.get('/', handleGetAllProfiles);
router.get('/:id', handleGetSpecificProfile);
router.patch('/:id', processUpdateProfile);

export default router;
