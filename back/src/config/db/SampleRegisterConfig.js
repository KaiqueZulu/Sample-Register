import Sequelize from 'sequelize';
import {env} from 'process';

const sequelize = new Sequelize('samples-register', env.POSTGRES_USER, env.POSTGRES_PASSWORD, {
  host: env.POSTGRES_HOST,
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
  console.info('Connection has been stablished! Sample-db');
} catch (error) {
  console.error('Unable to connect to the database.');
  console.error(error.message);
}
export default sequelize;