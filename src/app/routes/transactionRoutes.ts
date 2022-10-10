import { Router } from "express";
import routeControllerAdapter from "../adapters/routeControllerAdapter";
import transactionFactory from "../factories/makeTransaction";
const transactionRoutes = Router();

const { transactionsController } = transactionFactory();

transactionRoutes.get("/", routeControllerAdapter(transactionsController));

export default transactionRoutes;
