import Sequelize from 'sequelize';



const sequelize = new Sequelize('grid-db', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host:process.env.POSTGRES_HOST_GRID,
  port:process.env.POSTGRES_GRID_PORT,
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
  console.info('Connection has been stablished! Grid-db');
} catch (error) {
  console.error('Unable to connect to the database.');
  console.error(error.message);
}
export default sequelize;