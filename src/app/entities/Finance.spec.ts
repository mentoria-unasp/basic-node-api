import Types from "../enums/Types";
import IFinance from "../interfaces/IFinance";
import Finance from "./Finance"

const makeSut = (financeData: IFinance) => {
  return new Finance(financeData);
}

describe("Finance Entity", () => {
  it("Should be a instance of Finance", () => {
    const sut = makeSut({
      name: "Teste",
      value: 2,
      type: Types.REVENUE,
      userAccountId: 1
    });

    expect(sut).toBeInstanceOf(Finance);
  })
})