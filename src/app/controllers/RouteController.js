import { Route, Location } from '../models';

class RouteController {
  async index(req, res) {
    const routes = await Route.findAll({
      // order by id and model.id
      order: ['id', [{ model: Location, as: 'location' }, 'id', 'asc']],
      include: [
        {
          model: Location,
          as: 'location',
        },
      ],
    });

    return res.json(routes);
  }

  async store(req, res) {
    const { name, route } = req.body;

    const newRoute = await Route.create({ name });

    if (route.length > 0) {
      route.map(async (r) => {
        const location = await Location.create(r);
        await newRoute.addLocation(location);

        return null;
      });
    }
    return res.json(newRoute);
  }

  async update(req, res) {
    const { name } = req.body;
    const route = await Route.findByPk(req.params.id);

    if (!route) {
      return res.status(400).json({ error: 'rota não encontrada!' });
    }

    const updatedroute = await route.update({ name });

    return res.json(updatedroute);
  }

  async delete(req, res) {
    const route = await Route.findByPk(req.params.id);

    if (!route) {
      return res.status(400).json({ error: 'rota não encontrada!' });
    }

    route.destroy();

    return res.json(route);
  }
}

module.exports = new RouteController();
