import Sequelize, { Model } from 'sequelize';

class Complaint extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.TEXT,
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
    this.belongsTo(models.TypeComplaint, {
      foreignKey: 'type_id',
      as: 'type',
    });
    this.belongsTo(models.Location, {
      foreignKey: 'location_id',
      as: 'location',
    });
  }
}
module.exports = Complaint;
