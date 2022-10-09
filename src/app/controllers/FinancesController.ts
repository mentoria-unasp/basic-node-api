import { Request, Response } from "express";
import CreateFinancesUseCase from "../usecases/CreateFinancesUseCase";

class FinancesController {
  constructor(private createFinancesUseCase: CreateFinancesUseCase) { }

  list(request: Request, response: Response) {
    console.log(this)
    const result = this.createFinancesUseCase.execute();

    return response.json(result)
  }

}

export default FinancesController;