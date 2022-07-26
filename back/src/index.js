import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { env } from 'process';
import cors from 'cors';
import { readFile } from 'fs/promises';

import * as db from './config/db/initialData.js';

import Routes from './routers/router.js';
import SampleTask from './modules/sample/service/SampleTask.js';
const swaggerDocs = JSON.parse(
  await readFile('./src/config/swagger/swagger.json', 'utf8')
);

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

app.listen(env.API_PORT, () => {
  console.log(`Server is running on port ${env.API_PORT}`);
});
