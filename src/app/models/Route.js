import Sequelize, { Model } from 'sequelize';

class Route extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Location, {
      through: 'routes_locations',
      foreignKey: 'routes_id',
      as: 'location',
    });
  }
}
module.exports = Route;
