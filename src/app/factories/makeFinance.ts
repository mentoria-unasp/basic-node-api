import FinancesController from "../controllers/FinancesController";
import FinancesRepository from "../repositories/FinancesRepository";
import CreateFinancesUseCase from "../usecases/CreateFinancesUseCase";

const financeFactory = () => {
  const financesRepository = new FinancesRepository();
  const createFinancesUseCase = new CreateFinancesUseCase(financesRepository);
  const financesController = new FinancesController(createFinancesUseCase);

  return {
    financesRepository,
    createFinancesUseCase,
    financesController
  }
}

export default financeFactory;