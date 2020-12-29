import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import dotenv from 'dotenv';

dotenv.config();

export default async (req, res, next) => {
  if (req.path === '/login') return next();
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      auth: false,
      id: null,
      token: null,
      message: 'token nao fornecido',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.SECRET);
    req.user_id = decoded.id;
    req.permission = decoded.permission;
    // caso for sucedido passsar para o next() proximo
    return next();
  } catch (err) {
    return res.status(401).json({
      auth: false,
      id: null,
      token: null,
      message: 'token inválido',
    });
  }
};
