import {
  processAddWorkExperience,
  processDeleteWorkExperience,
} from '@controllers/work-experience.controller';
import { Router } from 'express';

const router = Router();

router.post('/', processAddWorkExperience);
router.delete('/:id', processDeleteWorkExperience);

export default router;
