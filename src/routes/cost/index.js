import { Router } from 'express';
import controllerHandler from 'Utilities/controller-handler';
import { getCountries } from '../../controllers/cost';
import India from './IN';

const router = Router();

router.get('/', controllerHandler(getCountries));

router.use('/IN', India);

export default router;
