import FinancesRepository from "../repositories/FinancesRepository";

class CreateFinancesUseCase {
  constructor(private financesRepository: FinancesRepository) { }

  execute() {
    const result = this.financesRepository.listAll();

    return result;
  }
}

export default CreateFinancesUseCase;