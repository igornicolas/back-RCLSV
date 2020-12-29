import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// quando colocar o auth remover o dotenv daqui, por favor!
import dotenv from 'dotenv';
import routes from './routes';
// import auth from './middlewares/auth';

import './database';

dotenv.config();
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(bodyParser.urlencoded({ extended: true }));
    this.server.use(bodyParser.json());
    //   this.server.use(auth);
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
