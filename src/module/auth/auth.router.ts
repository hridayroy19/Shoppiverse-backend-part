import { Router } from "express";
import { authController } from "./auth.Controller";

const authRouter = Router()

authRouter.post("/register",authController.userRegister)
authRouter.post("/login", authController.loginUser)
authRouter.post("/logout")

export default authRouter;