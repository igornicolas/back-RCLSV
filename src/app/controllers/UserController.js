import { User, Citizen, Truck } from '../models';

class UserController {
  async index(req, res) {
    const user = await User.findAll({
      order: ['id'],
      attributes: ['id', 'name', 'surname', 'email'],
      include: [
        {
          model: Citizen,
          attributes: ['id'],
        },
        {
          model: Truck,
          attributes: ['id'],
        },
      ],
    });

    return res.json(user);
  }

  async singleIndex(req, res) {
    const user = await User.findByPk(req.params.id, {
      attributes: ['id', 'name', 'surname', 'email'],
      include: [
        {
          model: Citizen,
          attributes: ['id'],
        },
        {
          model: Truck,
          attributes: ['id'],
        },
      ],
    });
    return res.json(user);
  }

  async store(req, res) {
    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'Email já está sendo usado' });
    }

    /**
     * usar {id, name , email} ao inves de user
     * para retornar apenas as informacoes necessarias
     * */
    const { name, surname, email, password, isWhat } = req.body;

    const user = await User.create({
      name,
      surname,
      email,
      password,
    });

    if (isWhat === 'citizen') {
      const { cpf, token, notification, latitude, longitude } = req.body;
      user.createCitizen({ cpf, token, notification, latitude, longitude });
    } else if (isWhat === 'truck') {
      const { plate, route, latitude, longitude } = req.body;
      user.createTruck({ plate, route, latitude, longitude });
    }

    return res.json(user);
  }

  async delete(req, res) {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(400).json({ error: 'usuario não encontrado!' });
    }
    user.destroy();
    return res.json(user);
  }

  async update(req, res) {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(400).json({ error: 'usuario não encontrado!' });
    }
    const { newName, newSurname, newEmail } = req.body;

    const { id, name, surname, email } = await user.update({
      newName,
      newSurname,
      newEmail,
    });

    return res.json({
      id,
      name,
      surname,
      email,
    });
  }

  async updateSecure(req, res) {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(400).json({ error: 'data not found' });
    }

    const { actual_password } = req.body;
    const isCorrect = await user.checkPassword(`${actual_password}`);

    if (!isCorrect)
      return res.status(400).json({ erro: 'A senha fornecida está incorreta' });

    const { id, name, email, password } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      password,
    });
  }
  /** 
  async setTechnician(req, res) {
    const user_id = req.params.id;
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }
    const technician = await user.createTechnician();
    return res.json(technician);
  } */
}

module.exports = new UserController();
