module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('complaints', 'type_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'type_complaints', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }),

  down: (queryInterface) =>
    queryInterface.removeColumn('complaints', 'type_id'),
};
