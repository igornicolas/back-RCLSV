import { TypeComplaint } from '../models';

class TypeComplaintController {
  async index(req, res) {
    const types = await TypeComplaint.findAll({
      order: ['id'],
    });

    return res.json(types);
  }

  async store(req, res) {
    const { name } = req.body;

    const type = await TypeComplaint.create({ name });

    return res.json(type);
  }

  async update(req, res) {
    const { type_id, name } = req.body;
    const type = await TypeComplaint.findByPk(type_id);
    if (!type) {
      return res.status(400).json({ error: 'tipo não encontrado!' });
    }

    const newType = await type.update({
      name,
    });

    return res.json(newType);
  }

  async delete(req, res) {
    const { type_id } = req.body;

    const type = await TypeComplaint.findByPk({ type_id });
    if (!type) {
      return res.status(400).json({ error: 'tipo não encontrado!' });
    }
    await type.destroy();

    return res.json(type);
  }
}

module.exports = new TypeComplaintController();
