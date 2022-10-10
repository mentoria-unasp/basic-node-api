import Types from "../enums/Types";
import ITransaction from "../interfaces/ITransaction";

class Transaction {
  type: Types;
  value: number;
  name: string;
  userAccountId: number;

  constructor({
    name,
    type,
    value,
    userAccountId
  }: ITransaction) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.userAccountId = userAccountId;
  }
}

export default Transaction;