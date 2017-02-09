import { Router } from 'express';
import India from './IN';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send({ status: 'success', countries: ['India'] });
});

router.use('/IN', India);

export default router;
