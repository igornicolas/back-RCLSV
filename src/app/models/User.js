import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        surname: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true,
      }
    );

    this.addHook('beforeSave', async (user) => {
      // se colocasse =>user.name = 'Igor'; todos os usuarios iriam ter nome Igor
      if (user.password) {
        // eslint-disable-next-line no-param-reassign
        user.password_hash = await bcrypt.hash(user.password, 10);
      }
    });
    return this;
  }

  static associate(models) {
    this.hasOne(models.Citizen, {
      foreignKey: 'user_id',
    });
    this.hasOne(models.Truck, {
      foreignKey: 'user_id',
    });
    this.belongsTo(models.Location, {
      foreignKey: 'location_id',
      as: 'location',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

module.exports = User;
