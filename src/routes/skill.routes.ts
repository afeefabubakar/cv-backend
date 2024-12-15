import {
  processCreateSkill,
  processDeleteSkill,
  handleGetSkills,
  processAddProfileSkill,
  processDeleteProfileSkill,
} from '@controllers/skill.controller';
import { Router } from 'express';

const router = Router();

router.post('/', processCreateSkill);
router.post('/profile', processAddProfileSkill);
router.get('/', handleGetSkills);
router.delete('/:id', processDeleteSkill);
router.delete('/profile/:id', processDeleteProfileSkill);

export default router;
