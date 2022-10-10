import Types from "../enums/Types";
import ITransaction from "../interfaces/ITransaction";
import Transaction from "./Transaction"

const makeSut = (transactionData: ITransaction) => {
  return new Transaction(transactionData);
}

describe("Transaction Entity", () => {
  it("Should be a instance of Transaction", () => {
    const sut = makeSut({
      name: "Teste",
      value: 2,
      type: Types.REVENUE,
      userAccountId: 1
    });

    expect(sut).toBeInstanceOf(Transaction);
  })
})