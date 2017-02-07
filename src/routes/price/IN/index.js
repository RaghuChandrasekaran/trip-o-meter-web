import { Router } from 'express';
import getData from './price-finder';

const router = Router();

router.get('/metro', async (req, res, next) => {
  getData('metro', res, next);
});

router.get('/capital', async (req, res, next) => {
  getData('capital', res, next);
});

router.get('/', async (req, res, next) => {
  if (req.query.error) {
    getData('', res, next);
  }
});

export default router;
