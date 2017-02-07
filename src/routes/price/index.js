import { Router } from 'express';
import India from './IN';

const router = Router();

router.use('/IN', India);

export default router;
