import {
  Express, json
} from 'express'
import dotenv from 'dotenv';
dotenv.config();

import ApplicationConstants from './constants/ApplicationConstants'
import { transactionRoutes, userAccountRoutes } from './routes';


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
    this.app.use("/transactions", transactionRoutes);
    this.app.use("/userAccount", userAccountRoutes);
  }

  start() {
    this.app.listen(ApplicationConstants.PORT, () => {
      console.info("App running on:", ApplicationConstants.PORT)
    })
  }

}

export default Server;