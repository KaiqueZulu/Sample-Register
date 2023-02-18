import Sequelize from 'sequelize';
import sequelize from '../../../config/db/SampleRegisterConfig.js';

const Grid = sequelize.define('grid', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  line1: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  line2: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  line3: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  line4: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  line5: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  line6: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  line7: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  line8: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  line9: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  line10: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  line11: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  line12: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
},)

//const Grid = {
//  1: ['a1', 'a2', 'a3'],
//  2: ['a4', 'a5', 'a6'],
//  3: ['a7', 'a8', 'a9'],
//};
await Grid.sync({alter: true})

export default Grid;
