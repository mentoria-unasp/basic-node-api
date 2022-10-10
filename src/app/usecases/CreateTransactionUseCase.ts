import { IUseCase } from "../interfaces/IUseCase";
import TransactionRepository from "../repositories/TransactionRepository";

class CreateTransactionUseCase implements IUseCase {
  constructor(private transactionRepository: TransactionRepository) { }

  execute() {
    const result = this.transactionRepository.listAllByUserAccountId(1);

    return result;
  }
}

export default CreateTransactionUseCase;