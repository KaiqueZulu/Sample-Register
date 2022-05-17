import {
  addMinutes
} from 'date-fns';
import Sample from '../sample/model/Sample.js';

export async function createData() {
  try {
    await Sample.sync({
      force: true
    });

    await Sample.create({
      type: 'urina',
      code: 123456780,
      deadline_to_expire: addMinutes(new Date(), 1)
    });
    await Sample.create({
      type: 'sangue',
      code: 123456781,
      deadline_to_expire: addMinutes(new Date(), 1)
    });
  } catch (err) {
    console.log(err);
  }
}