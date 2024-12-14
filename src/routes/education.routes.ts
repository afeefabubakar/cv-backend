import {
  processCreateEducation,
  processDeleteEducation,
  processUpdateEducation,
} from '@controllers/education.controller';
import { Router } from 'express';

const router = Router();

router.post('/', processCreateEducation);
router.put('/:id', processUpdateEducation);
router.delete('/:id', processDeleteEducation);

export default router;
