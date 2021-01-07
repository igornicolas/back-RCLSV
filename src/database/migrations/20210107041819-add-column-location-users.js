module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('users', 'location_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'locations', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }),

  down: (queryInterface) => queryInterface.removeColumn('users', 'location_id'),
};
