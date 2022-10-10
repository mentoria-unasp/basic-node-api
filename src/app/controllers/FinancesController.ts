import { Request, Response } from "express";
import { IController } from "../interfaces/IController";
import CreateFinancesUseCase from "../usecases/CreateFinancesUseCase";

class FinancesController implements IController {
  constructor(private createFinancesUseCase: CreateFinancesUseCase) { }

  async requestHandler(request: Request, response: Response) {
    const result = this.createFinancesUseCase.execute();

    return response.json(result)
  }

}

export default FinancesController;