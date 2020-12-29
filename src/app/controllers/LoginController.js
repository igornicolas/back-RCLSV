import jwt from 'jsonwebtoken';
import { User } from '../models';

class LoginController {
  async store(req, res) {
    const user = await User.findOne({
      where: { email: req.body.email },
    });

    if (!user) {
      return res.status(400).json({ error: 'usuario não encontrado' });
    }
    const { password } = await req.body;
    const correctPassword = await user.checkPassword(`${password}`);
    if (!correctPassword) {
      return res.status(400).json({ error: 'Senha incorreta' });
    }
    // eslint-disable-next-line no-undef
    const { id, permission } = user;
    const token = jwt.sign({ id, permission }, process.env.SECRET);
    return res.json({ auth: true, token, id, permission });
  }

  async logout(req, res) {
    return res.json({ auth: false, token: null, id: null });
  }
}

module.exports = new LoginController();
