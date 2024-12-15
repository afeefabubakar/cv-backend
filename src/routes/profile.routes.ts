import {
  handleGetAllProfiles,
  handleGetSpecificProfile,
  processCreateProfile,
  processSetProfileLock,
  processUpdateProfile,
} from '@controllers/profile.controller';
import { Router } from 'express';

const router = Router();

router.get('/', handleGetAllProfiles);
router.get('/:id', handleGetSpecificProfile);
router.put('/:id', processUpdateProfile);
router.post('/', processCreateProfile);
router.get('/:id/lock', processSetProfileLock);

export default router;
