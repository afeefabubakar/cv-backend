import {
  processAddWorkExperience,
  processDeleteWorkExperience,
  processUpdateWorkExperience,
} from '@controllers/work-experience.controller';
import { Router } from 'express';

const router = Router();

router.post('/', processAddWorkExperience);
router.put('/:id', processUpdateWorkExperience);
router.delete('/:id', processDeleteWorkExperience);

export default router;
