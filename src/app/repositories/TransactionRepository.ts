import Transaction from "../entities/Transaction";
import Types from "../enums/Types";

class TransactionRepository {
  transactions: Transaction[]

  constructor() {
    this.transactions = [];
  }

  create() {
    this.transactions.push({
      name: "Spotify",
      type: Types.SPEND,
      userAccountId: 1,
      value: 28.50
    });
  }

  listAll() {
    return this.transactions;
  }

  listAllByUserAccountId(userAccountId: number) {
    return this.transactions.filter((transaction) => {
      return transaction.userAccountId === userAccountId
    });
  }
}

export default TransactionRepository;