import { Complaint, User, TypeComplaint } from '../models';

class ComplaintController {
  async index(req, res) {
    const complaints = await Complaint.findAll({
      // order by id and model.id
      order: ['id'],
      include: [
        {
          model: TypeComplaint,
          as: 'type',
        },
        {
          model: User,
          as: 'user',
        },
      ],
    });

    return res.json(complaints);
  }

  async store(req, res) {
    // when token is active remove the user_id
    const { description, type_id, anonymous, user_id } = req.body;
    let type = null;

    if (!type_id) {
      return res.status(400).json({ error: 'Tipo não passado!' });
    }
    type = await TypeComplaint.findByPk(type_id);

    if (!type) {
      return res.status(400).json({ error: 'Tipo não encontrado!' });
    }
    const complaint = await Complaint.create({ description });

    complaint.setType(type);
    if (!anonymous) {
      const user = await User.findByPk(user_id);

      await complaint.setUser(user);
    }

    return res.json(complaint);
  }

  /** async update(req, res) {
    const { name } = req.body;
    const route = await complaint.findByPk(req.params.id);

    if (!route) {
      return res.status(400).json({ error: 'route not found' });
    }

    const updatedroute = await route.update({ name });

    return res.json(updatedroute);
  }

  async delete(req, res) {
    const route = await complaint.findByPk(req.params.id);

    if (!route) {
      return res.status(400).json({ error: 'route not found' });
    }

    route.destroy();

    return res.json(route);
  } */
}

module.exports = new ComplaintController();
