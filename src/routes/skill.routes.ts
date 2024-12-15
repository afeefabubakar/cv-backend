import {
  processCreateSkill,
  processDeleteSkill,
  handleGetSkills,
} from '@controllers/skill.controller';
import { Router } from 'express';

const router = Router();

router.post('/', processCreateSkill);
router.get('/', handleGetSkills);
router.delete('/:id', processDeleteSkill);

export default router;
