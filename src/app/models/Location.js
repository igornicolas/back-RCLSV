import Sequelize, { Model } from 'sequelize';

class Location extends Model {
  static init(sequelize) {
    super.init(
      {
        latitude: Sequelize.NUMERIC,
        longitude: Sequelize.NUMERIC,
      },
      {
        sequelize,
        timestamps: true,
      }
    );
  }

  static associate(models) {
    this.hasOne(models.User, {
      foreignKey: 'location_id',
    });
    this.belongsToMany(models.Route, {
      through: 'route_locations',
      foreignKey: 'location_id',
      as: 'route',
    });
  }
}
module.exports = Location;
