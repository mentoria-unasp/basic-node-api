import { Request, Response } from "express";
import { IController } from "../interfaces/IController";
import ListTransactionsByAccountIdUseCase from "../usecases/ListTransactionsByAccountIdUseCase";

class ListTransactionsByAccountIdController implements IController {
  constructor(private listTransactionsByAccountIdUseCase: ListTransactionsByAccountIdUseCase) { }

  async requestHandler(request: Request, response: Response) {
    const { userId } = request.params;

    const result = this.listTransactionsByAccountIdUseCase.execute(+userId);
    console.log(result)
    return response.json({ result })
  }

}

export default ListTransactionsByAccountIdController;