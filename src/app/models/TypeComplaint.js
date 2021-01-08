import Sequelize, { Model } from 'sequelize';

class TypeComplaint extends Model {
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
    this.hasOne(models.Complaint, {
      foreignKey: 'type_id',
    });
  }
}
module.exports = TypeComplaint;
