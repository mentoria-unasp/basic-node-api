import Transaction from "../entities/Transaction";
import Types from "../enums/Types";

class TransactionRepository {
  private transactions: Transaction[]

  constructor() {
    this.transactions = [{
      name: "Spotify",
      type: Types.SPEND,
      userAccountId: 1,
      value: 28.50
    }];
  }

  listAllByUserAccountId(userAccountId: number) {
    return this.transactions.find((transaction) => {
      return transaction.userAccountId === userAccountId
    });
  }
}

export default TransactionRepository;