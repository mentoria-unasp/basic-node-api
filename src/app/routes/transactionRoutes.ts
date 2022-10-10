import { Router } from "express";
import routeControllerAdapter from "../adapters/routeControllerAdapter";
import makeTransaction from "../factories/makeTransaction";
const transactionRoutes = Router();

const { transactionsController } = makeTransaction();

transactionRoutes.get("/", routeControllerAdapter(transactionsController));

export default transactionRoutes;
