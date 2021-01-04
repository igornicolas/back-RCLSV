module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('routes_locations', {
      routes_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'routes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      locations_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'locations', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    }),

  down: (queryInterface) => queryInterface.dropTable('routes_locations'),
};
