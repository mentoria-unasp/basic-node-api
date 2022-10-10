import { Router } from "express";

const userAccountRoutes = Router();

userAccountRoutes.get("/", (request, response) => {
  return response.json({})
})

export default userAccountRoutes;