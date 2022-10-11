import TransactionController from "../controllers/CreateTransactionController";
import TransactionRepository from "../repositories/TransactionRepository";
import CreateTransactionUseCase from "../usecases/CreateTransactionUseCase";

const makeCreateTransaction = () => {
  const transactionsRepository = new TransactionRepository();
  const createTransactionUseCase = new CreateTransactionUseCase(transactionsRepository);
  const createTransactionsController = new TransactionController(createTransactionUseCase);

  return {
    transactionsRepository,
    createTransactionUseCase,
    createTransactionsController
  }
}

export default makeCreateTransaction;