import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/", (request, response) => {
  return response.json({})
})

export default userRoutes;