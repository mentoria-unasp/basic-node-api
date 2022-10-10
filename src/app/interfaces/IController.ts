import { Request, Response } from "express";

type RequestHandler = (request: Request, reponse: Response) => Promise<Response>;

interface IController {
  requestHandler: RequestHandler;
}

export { RequestHandler, IController };