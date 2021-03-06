import Sequelize, { Model } from 'sequelize';

class Truck extends Model {
  static init(sequelize) {
    super.init(
      {
        plate: Sequelize.STRING,
        route: Sequelize.TEXT,
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
