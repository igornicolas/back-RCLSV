import { Feedback, User } from '../models';

class FeedbackController {
  async index(req, res) {
    const feedbacks = await Feedback.findAll({
      // order by id and model.id
      order: ['id'],
      include: [
        {
          model: User,
          as: 'user_id',
        },
      ],
    });

    return res.json(feedbacks);
  }

  async store(req, res) {
    const { description } = req.body;

    const feedback = await Feedback.create({ description });

    return res.json(feedback);
  }

  /** async update(req, res) {
    const { name } = req.body;
    const route = await Feedback.findByPk(req.params.id);

    if (!route) {
      return res.status(400).json({ error: 'route not found' });
    }

    const updatedroute = await route.update({ name });

    return res.json(updatedroute);
  }

  async delete(req, res) {
    const route = await Feedback.findByPk(req.params.id);

    if (!route) {
      return res.status(400).json({ error: 'route not found' });
    }

    route.destroy();

    return res.json(route);
  } */
}

module.exports = new FeedbackController();
