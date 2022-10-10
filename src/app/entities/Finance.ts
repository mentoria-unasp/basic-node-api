import Types from "../enums/Types";
import IFinance from "../interfaces/IFinance";

class Finance {
  private type: Types;
  private value: number;
  private name: string;

  constructor({
    name,
    type,
    value
  }: IFinance) {
    this.name = name;
    this.type = type;
    this.value = value;
  }
}

export default Finance;