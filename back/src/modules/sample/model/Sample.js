import Sequelize from 'sequelize';
import sequelize from '../../../config/db/SampleRegisterConfig.js';

const Sample = sequelize.define('sample', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
}, {
  timestamps:true,
});

await Sample.sync();

export default Sample;