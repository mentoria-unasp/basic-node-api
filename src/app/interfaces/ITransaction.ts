import Types from "../enums/Types";

interface ITransaction {
  type: Types;
  value: number;
  name: string;
  userAccountId: number;
}

export default ITransaction;