import Sequelize from 'sequelize';
import sequelize from '../../../config/db/SampleConfig.js';

const Sample = sequelize.define('sample', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  type: {
    type: Sequelize.STRING,
  },
  code: {
    type: Sequelize.INTEGER,
    unique: true
  },
  deadline_to_expire: {
    type: Sequelize.DATE,
  },
  valid: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
}, {});

await Sample.sync();

export default Sample;