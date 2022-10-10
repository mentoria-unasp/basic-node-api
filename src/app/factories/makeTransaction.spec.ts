import TransactionsController from "../controllers/TransactionController";
import TransactionsRepository from "../repositories/TransactionRepository";
import CreateTransactionsUseCase from "../usecases/CreateTransactionUseCase";
import transactionFactory from "./makeTransaction"

const makeSut = () => {
  return transactionFactory();
}

describe('makeTransaction', () => {
  it('should return a object with a transactionsRepository', () => {
    const { transactionsRepository } = makeSut();

    expect(transactionsRepository).toBeDefined();
    expect(transactionsRepository).toBeInstanceOf(TransactionsRepository);
  })

  it('should return a object with a createTransactionUseCase', () => {
    const { createTransactionUseCase } = makeSut();

    expect(createTransactionUseCase).toBeDefined();
    expect(createTransactionUseCase).toBeInstanceOf(CreateTransactionsUseCase);
  })

  it('should return a object with a transactionsController', () => {
    const { transactionsController } = makeSut();

    expect(transactionsController).toBeDefined();
    expect(transactionsController).toBeInstanceOf(TransactionsController);
  })
})