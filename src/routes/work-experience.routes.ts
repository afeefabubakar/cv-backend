import { processAddWorkExperience } from '@controllers/work-experience.controller';
import { Router } from 'express';

const router = Router();

router.post('/', processAddWorkExperience);

export default router;
