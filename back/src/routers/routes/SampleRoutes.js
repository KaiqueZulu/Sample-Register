import {
  Router
} from 'express';
import SampleController from '../../sample/controller/SampleController.js';

const router = new Router();

router.post('/api/sample/create', SampleController.createSample);

router.get('/api/test', SampleController.findSamplesAll);
router.get('/api/sample/code/:code', SampleController.findByCode);
router.get('/api/sample/type/:type', SampleController.findByType);

router.delete('/api/sample/:code', SampleController.deleteByCode);

export default router;