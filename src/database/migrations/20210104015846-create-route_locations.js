module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('route_locations', {
      route_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'routes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      location_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'locations', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    }),

  down: (queryInterface) => queryInterface.dropTable('routes_locations'),
};
