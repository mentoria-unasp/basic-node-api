import { Router } from "express";
import routeControllerAdapter from "../adapters/routeControllerAdapter";
import makeCreateTransaction from "../factories/makeCreateTransaction";
import makeListTransactionsByAccountIdTransaction from "../factories/makeListTransactionsByAccountIdTransaction";
const transactionRoutes = Router();

const { createTransactionsController } = makeCreateTransaction();
const { listTransactionsByAccountIdController } = makeListTransactionsByAccountIdTransaction();

transactionRoutes.post("/", routeControllerAdapter(createTransactionsController));

transactionRoutes.get("/:userId", routeControllerAdapter(listTransactionsByAccountIdController));

export default transactionRoutes;
