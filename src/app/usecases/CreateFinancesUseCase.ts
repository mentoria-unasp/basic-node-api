import { IUseCase } from "../interfaces/IUseCase";
import FinancesRepository from "../repositories/FinancesRepository";

class CreateFinancesUseCase implements IUseCase {
  constructor(private financesRepository: FinancesRepository) { }

  execute() {
    const result = this.financesRepository.listAll();

    return result;
  }
}

export default CreateFinancesUseCase;