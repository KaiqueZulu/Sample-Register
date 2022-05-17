import dotenv from 'dotenv';
import {
  ok
} from 'assert';

const env = process.env.NODE_ENV || 'dev';
ok(env === 'prod' || env === 'dev', 'A env é inválida, ou dev ou prod');
const configPath = `./config/env/.env.${env}`;
export default dotenv.config({
  path: configPath
});