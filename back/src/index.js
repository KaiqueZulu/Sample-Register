import express from 'express';
import * as process from '../config/env/dotEnv.js';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import {
  readFile
} from 'fs/promises';

import * as db from '../config/db/initialData.js';

import Routes from './routers/router.js';
import SampleTask from './sample/service/SampleTask.js';
const swaggerDocs = JSON.parse(await readFile('./config/swagger/swagger.json', 'utf8'));

const app = express();
SampleTask.start();
db.createInitialData();

app.get('/api/status', (req, res) => {
  return res.status(200).json({
    service: 'Sample-API',
    status: 'up',
    httpStatus: 200,
  });
});


app.use(express.static('./'));
app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/v1', Routes);


app.listen(process.default.parsed.API_PORT, () => {
  console.log(`Server is running on port ${process.default.parsed.API_PORT}`);
});