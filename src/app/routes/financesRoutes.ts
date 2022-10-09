import { Router } from "express";
import financeFactory from "../factories/finance";
const financesRoutes = Router();

const { financesController } = financeFactory();

financesRoutes.get("/", financesController.list);

export default financesRoutes;
