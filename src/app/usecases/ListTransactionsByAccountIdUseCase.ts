import { IUseCase } from "../interfaces/IUseCase";
import TransactionRepository from "../repositories/TransactionRepository";

class ListTransactionsByAccountIdUseCase implements IUseCase {
  constructor(private transactionRepository: TransactionRepository) { }

  execute(userId: number) {
    const result = this.transactionRepository.listAllByUserAccountId(userId);

    return result;
  }
}

export default ListTransactionsByAccountIdUseCase;