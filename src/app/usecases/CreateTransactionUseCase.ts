import { IUseCase } from "../interfaces/IUseCase";
import TransactionRepository from "../repositories/TransactionRepository";

class CreateTransactionUseCase implements IUseCase {
  constructor(private transactionRepository: TransactionRepository) { }

  execute() {
    const result = this.transactionRepository.create();

    return result;
  }
}

export default CreateTransactionUseCase;