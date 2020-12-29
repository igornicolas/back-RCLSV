import Sequelize, { Model } from 'sequelize';

class Truck extends Model {
  static init(sequelize) {
    super.init(
      {
        plate: Sequelize.STRING,
        route: Sequelize.TEXT,
        latitude: Sequelize.STRING,
        longitude: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}
module.exports = Truck;
