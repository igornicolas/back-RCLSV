import Sequelize, { Model } from 'sequelize';

class Citizen extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: Sequelize.STRING,
        token: Sequelize.STRING,
        notification: Sequelize.BOOLEAN,
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
module.exports = Citizen;
