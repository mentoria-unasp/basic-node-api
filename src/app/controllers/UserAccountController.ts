import { Request, Response } from "express";
import { IController, RequestHandler } from "../interfaces/IController";

// TODO
class UserAccountController implements IController {
  async requestHandler(request: Request, response: Response) {
    return response;
  }
}

export default UserAccountController;