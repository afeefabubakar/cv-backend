import { Router } from 'express';
import {
  handleGetMisc,
  processCreateMisc,
  processDeleteMisc,
} from '../controllers/misc.controller';

const router = Router();

router.get('/:profileId', handleGetMisc);
router.post('/', processCreateMisc);
router.delete('/:id', processDeleteMisc);

export default router;
