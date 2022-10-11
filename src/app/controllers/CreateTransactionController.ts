import { Request, Response } from "express";
import { IController } from "../interfaces/IController";
import CreateTransactionsUseCase from "../usecases/CreateTransactionUseCase";

class CreateTransactionController implements IController {
  constructor(private createTransactionsUseCase: CreateTransactionsUseCase) { }

  async requestHandler(request: Request, response: Response) {
    const result = this.createTransactionsUseCase.execute();

    return response.json(result)
  }

}

export default CreateTransactionController;