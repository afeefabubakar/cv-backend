import { handleGetAllLocations } from '@controllers/location.controller';
import { Router } from 'express';

const router = Router();

router.get('/', handleGetAllLocations);

export default router;
