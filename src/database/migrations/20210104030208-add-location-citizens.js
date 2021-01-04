module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('citizens', 'location_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'locations', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }),

  down: (queryInterface) =>
    queryInterface.removeColumn('citizens', 'location_id'),
};
