import {
  Express, json
} from 'express'
import dotenv from 'dotenv';
dotenv.config();

import ApplicationConstants from './constants/ApplicationConstants'
import { financesRoutes, userRoutes } from './routes';


class Server {
  constructor(private app: Express) {
    this.setupRoutes();
    this.setupMiddlewares();
    this.start();
  }

  setupMiddlewares() {
    this.app.use(json());
  }

  setupRoutes() {
    this.app.use(financesRoutes);
    this.app.use(userRoutes);
  }

  start() {
    this.app.listen(ApplicationConstants.PORT, () => {
      console.info("App running on:", ApplicationConstants.PORT)
    })
  }

}

export default Server;