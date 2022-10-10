import { Router } from "express";
import routeControllerAdapter from "../adapters/routeControllerAdapter";
import financeFactory from "../factories/makeFinance";
const financesRoutes = Router();

const { financesController } = financeFactory();

financesRoutes.get("/", routeControllerAdapter(financesController));

export default financesRoutes;
