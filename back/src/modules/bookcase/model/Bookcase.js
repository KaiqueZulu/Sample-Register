import Sequelize from 'sequelize';
import sequelize from '../../../config/db/SampleRegisterConfig.js';

const Grid = sequelize.define('grid', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  a1: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  a2: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

//const Grid = {
//  1: ['a1', 'a2', 'a3'],
//  2: ['a4', 'a5', 'a6'],
//  3: ['a7', 'a8', 'a9'],
//};
await Grid.sync({ alter: true });

export default Grid;
