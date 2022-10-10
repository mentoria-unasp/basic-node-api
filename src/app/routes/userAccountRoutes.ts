import { Router } from "express";

const userAccountRoutes = Router();

// TODO
userAccountRoutes.get("/", (request, response) => {
  return response.json({})
})

export default userAccountRoutes;