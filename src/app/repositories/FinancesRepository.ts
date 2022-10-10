import Finance from "../entities/Finance";
import Types from "../enums/Types";
import IFinance from "../interfaces/IFinance";

class FinancesRepository {
  finances: Finance[]

  constructor() {
    this.finances = [];
  }

  listAll() {
    return this.finances;
  }
}

export default FinancesRepository;