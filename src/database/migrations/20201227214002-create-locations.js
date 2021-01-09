module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('locations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      latitude: {
        type: Sequelize.NUMERIC,
        allowNull: false,
      },
      longitude: {
        type: Sequelize.NUMERIC,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable('locations'),
};
