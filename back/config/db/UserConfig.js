import Sequelize from 'sequelize';
import * as process from '../env/dotEnv.js';


const sequelize = new Sequelize('user-db', process.default.parsed.POSTGRES_USER, process.default.parsed.POSTGRES_PASSWORD, {
  host: process.default.parsed.POSTGRES_HOST_USER,
  port: process.default.parsed.POSTGRES_USER_PORT,
  dialect: 'postgres',
  logging: false,
  quoteIdentifiers: false,
  define: {
    syncOnAssociation: true,
    timestamps: false,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true,
  },
});


try {
  sequelize.authenticate();
  console.info('Connection has been stablished! User-db');
} catch (error) {
  console.error('Unable to connect to the database.');
  console.error(error.message);
}
export default sequelize;