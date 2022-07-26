import {
  CronJob
} from 'cron';
import SampleRepository from '../repository/SampleRepository.js';

const SampleTask = new CronJob(
  '*/5 * * * * *',
  async () => {
    let currentDate = new Date();
    let result = await SampleRepository.findAll();
    for (let i in result) {
      let sample = result[i].dataValues;
      // console.log(currentDate.valueOf() > sample.deadline_to_expire.valueOf())
      if (currentDate.valueOf() > sample.deadline_to_expire.valueOf()) {
        if (sample.valid) {
          let result = await SampleRepository.update({
            valid: false
          }, {
            id: sample.id
          });
          console.log('Foi alterado: ', result);
        }
      }
    }
  },
  null,
  false,
  'America/Sao_Paulo'

);
// Use this if the 4th param is default value(false)
// job.start()

export default SampleTask;