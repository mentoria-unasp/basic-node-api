import { Request, Response } from "express";
import { IController } from "../interfaces/IController";

function routeControllerAdapter(controller: IController) {
  return (request: Request, response: Response) => {
    return controller.requestHandler(request, response)
  }
}

export default routeControllerAdapter;