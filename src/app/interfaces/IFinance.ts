import Types from "../enums/Types";

interface IFinance {
  type: Types;
  value: number;
  name: string;
  userAccountId: number;
}

export default IFinance;