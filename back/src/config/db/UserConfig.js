import Sequelize from 'sequelize';
import {env} from 'process';


const sequelize = new Sequelize('user-db', env.POSTGRES_USER, env.POSTGRES_PASSWORD, {
  host: env.POSTGRES_HOST_USER,
  port: env.POSTGRES_USER_PORT,
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