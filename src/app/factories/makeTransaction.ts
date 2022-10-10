import TransactionController from "../controllers/TransactionController";
import TransactionRepository from "../repositories/TransactionRepository";
import CreateTransactionUseCase from "../usecases/CreateTransactionUseCase";

const transactionFactory = () => {
  const transactionsRepository = new TransactionRepository();
  const createTransactionUseCase = new CreateTransactionUseCase(transactionsRepository);
  const transactionsController = new TransactionController(createTransactionUseCase);

  return {
    transactionsRepository,
    createTransactionUseCase,
    transactionsController
  }
}

export default transactionFactory;