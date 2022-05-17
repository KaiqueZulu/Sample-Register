import {
  Router
} from 'express';
import checkToken from '../../config/auth/checkToken.js';
import SampleController from '../sample/controller/SampleController.js';
import UserController from '../user/controller/userController.js';

const router = new Router();

//User
router.post('/api/user/auth', UserController.getAccessToken);

//Authentication 
router.use(checkToken);
//Sample
router.post('/api/sample/create', SampleController.createSample);

router.get('/api/test', SampleController.findSamplesAll);
router.get('/api/sample/code/:code', SampleController.findByCode);
router.get('/api/sample/type/:type', SampleController.findByType);

router.delete('/api/sample/:code', SampleController.deleteByCode);

export default router;