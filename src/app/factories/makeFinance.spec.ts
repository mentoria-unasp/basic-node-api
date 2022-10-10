import FinancesController from "../controllers/FinancesController";
import { IUseCase } from "../interfaces/IUseCase";
import FinancesRepository from "../repositories/FinancesRepository";
import CreateFinancesUseCase from "../usecases/CreateFinancesUseCase";
import financeFactory from "./makeFinance"

const makeSut = () => {
  return financeFactory();
}

describe('makeFinance', () => {
  it('should return a object with a financesRepository', () => {
    const { financesRepository } = makeSut();

    expect(financesRepository).toBeDefined();
    expect(financesRepository).toBeInstanceOf(FinancesRepository);
  })

  it('should return a object with a createFinanceUseCase', () => {
    const { createFinancesUseCase } = makeSut();

    expect(createFinancesUseCase).toBeDefined();
    expect(createFinancesUseCase).toBeInstanceOf(CreateFinancesUseCase);
  })

  it('should return a object with a financesController', () => {
    const { financesController } = makeSut();

    expect(financesController).toBeDefined();
    expect(financesController).toBeInstanceOf(FinancesController);
  })
})