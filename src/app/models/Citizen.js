import Sequelize, { Model } from 'sequelize';

class Citizen extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: Sequelize.STRING,
        token: Sequelize.STRING,
        notification: Sequelize.BOOLEAN,
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
    this.belongsTo(models.User, {
      foreignKey: 'location_id',
      as: 'location',
    });
  }
}
module.exports = Citizen;
