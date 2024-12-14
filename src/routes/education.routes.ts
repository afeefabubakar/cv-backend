import { processCreateEducation } from '@controllers/education.controller';
import { Router } from 'express';

const router = Router();

router.post('/', processCreateEducation);

export default router;
