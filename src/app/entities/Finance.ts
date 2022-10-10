import Types from "../enums/Types";
import IFinance from "../interfaces/IFinance";

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
  }: IFinance) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.userAccountId = userAccountId;
  }
}

export default Transaction;