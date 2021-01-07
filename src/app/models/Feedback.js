import Sequelize, { Model } from 'sequelize';

class Feedback extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.TEXT,
        user_id: Sequelize.INTEGER,
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
module.exports = Feedback;
