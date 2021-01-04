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
      foreignKey: 'user_id',
      as: 'user',
    });
    this.belongsToMany(models.Route, {
      through: 'routes_locations',
      foreignKey: 'locations_id',
      as: 'route',
    });
  }
}
module.exports = Location;
