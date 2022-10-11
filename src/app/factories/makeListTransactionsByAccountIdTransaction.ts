import ListTransactionsByAccountIdController from "../controllers/ListTransactionsByAccountIdController";
import TransactionRepository from "../repositories/TransactionRepository";
import ListTransactionsByAccountIdUseCase from "../usecases/ListTransactionsByAccountIdUseCase";

function makeListTransactionsByAccountIdTransaction() {
  const transactionsRepository = new TransactionRepository();
  const listTransactionsByAccountIdUseCase = new ListTransactionsByAccountIdUseCase(transactionsRepository);
  const listTransactionsByAccountIdController = new ListTransactionsByAccountIdController(listTransactionsByAccountIdUseCase);

  return {
    transactionsRepository,
    listTransactionsByAccountIdUseCase,
    listTransactionsByAccountIdController
  }

}

export default makeListTransactionsByAccountIdTransaction;